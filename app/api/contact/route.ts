import { Resend } from "resend"
import { supabase } from "@/lib/supabase"
import { sendWhatsAppLeadAlert } from "@/lib/sendWhatsApp"

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactPayload = {
  name?: string
  email?: string
  projectType?: string
  message?: string
  companyWebsite?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function qualifyLead(projectType: string, message: string) {
  const text = `${projectType} ${message}`.toLowerCase()

  let score = 40
  const tags: string[] = []

  if (text.includes("pos")) {
    score += 20
    tags.push("POS")
  }

  if (text.includes("saas")) {
    score += 25
    tags.push("SaaS")
  }

  if (text.includes("ai") || text.includes("automation")) {
    score += 20
    tags.push("AI")
  }

  if (text.includes("dashboard") || text.includes("analytics")) {
    score += 15
    tags.push("Dashboard")
  }

  if (
    text.includes("urgent") ||
    text.includes("asap") ||
    text.includes("immediately")
  ) {
    score += 15
    tags.push("Urgent")
  }

  if (
    text.includes("enterprise") ||
    text.includes("company") ||
    text.includes("business")
  ) {
    score += 15
    tags.push("Business")
  }

  score = Math.min(score, 100)

  const priority = score >= 80 ? "high" : score >= 60 ? "medium" : "normal"

  const budgetEstimate =
    score >= 80
      ? "₦1,500,000+ / enterprise-level project"
      : score >= 60
        ? "₦500,000 - ₦1,500,000 / serious business build"
        : "₦150,000 - ₦500,000 / starter project"

  const summary = `Potential ${projectType} project. Client needs help with: ${message.slice(
    0,
    220
  )}${message.length > 220 ? "..." : ""}`

  const nextStep =
    priority === "high"
      ? "Schedule a discovery call and prepare a formal proposal."
      : priority === "medium"
        ? "Reply with clarifying questions and offer a consultation."
        : "Send a friendly response and qualify budget/timeline."

  return {
    score,
    priority,
    budgetEstimate,
    summary,
    nextStep,
    tags,
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          success: false,
          error:
            "RESEND_API_KEY is missing. Add it to .env.local and restart server.",
        },
        { status: 500 }
      )
    }

    const body = (await request.json()) as ContactPayload

    const name = body.name?.trim()
    const email = body.email?.trim()
    const projectType = body.projectType?.trim()
    const message = body.message?.trim()
    const companyWebsite = body.companyWebsite?.trim()

    if (companyWebsite) {
      return Response.json({ success: true })
    }

    if (!name || !email || !projectType || !message) {
      return Response.json(
        { success: false, error: "Please fill all required fields." },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const ai = qualifyLead(projectType, message)

    const { error: dbError } = await supabase.from("leads").insert([
      {
        name,
        email,
        service: projectType,
        message,
        status: "new",
        source: "website",
        ai_score: ai.score,
        ai_priority: ai.priority,
        ai_budget_estimate: ai.budgetEstimate,
        ai_project_summary: ai.summary,
        ai_recommended_next_step: ai.nextStep,
        ai_tags: ai.tags,
      },
    ])

    if (dbError) {
      console.error("Supabase lead insert error:", dbError)
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "superilmtech@gmail.com"
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "SuperILM Tech <onboarding@resend.dev>"

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeProjectType = escapeHtml(projectType)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New SuperILM Tech Lead - ${ai.priority.toUpperCase()} Priority`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Project Request</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Project Type:</strong> ${safeProjectType}</p>

          <hr />

          <h3>AI Lead Qualification</h3>
          <p><strong>Score:</strong> ${ai.score}/100</p>
          <p><strong>Priority:</strong> ${ai.priority}</p>
          <p><strong>Budget Estimate:</strong> ${ai.budgetEstimate}</p>
          <p><strong>Recommended Next Step:</strong> ${ai.nextStep}</p>
          <p><strong>Tags:</strong> ${ai.tags.join(", ") || "General"}</p>

          <hr />

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    })

    if (result.error) {
      return Response.json(
        { success: false, error: result.error.message },
        { status: 500 }
      )
    }

    try {
      await sendWhatsAppLeadAlert({
        name,
        email,
        projectType,
        priority: ai.priority,
        budgetEstimate: ai.budgetEstimate,
      })
    } catch (whatsAppError) {
      console.error("WhatsApp alert failed:", whatsAppError)
    }

    return Response.json({
      success: true,
      message: dbError
        ? "Message sent, but lead storage failed."
        : "Message sent, saved, qualified, and alert processed successfully.",
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong.",
      },
      { status: 500 }
    )
  }
}