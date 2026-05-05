import { Resend } from "resend"
import { supabase } from "@/lib/supabase"

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

export async function POST(request: Request) {
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

    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      return Response.json(
        {
          success: false,
          error:
            "Supabase environment variables are missing. Add them to .env.local and restart server.",
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

    const toEmail = process.env.CONTACT_TO_EMAIL || "admin@superilmtech.com"
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "SuperILM Tech <hello@superilmtech.com>"

    const { error: dbError } = await supabase.from("leads").insert([
      {
        name,
        email,
        service: projectType,
        message,
      },
    ])

    if (dbError) {
      console.error("Supabase lead insert error:", dbError)
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeProjectType = escapeHtml(projectType)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New SuperILM Tech Project Request - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Project Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Project Type:</strong> ${safeProjectType}</p>
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

    return Response.json({
      success: true,
      message: dbError
        ? "Message sent successfully, but lead storage failed."
        : "Message sent and saved successfully.",
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