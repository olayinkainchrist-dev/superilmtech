import { Resend } from "resend"

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

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          success: false,
          error: "RESEND_API_KEY is missing. Add it to .env.local and restart server.",
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
      process.env.CONTACT_FROM_EMAIL || "SuperILM Tech <onboarding@resend.dev>"

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New SuperILM Tech Project Request - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Project Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
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
      message: "Message sent successfully.",
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 }
    )
  }
}