import twilio from "twilio"

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

type WhatsAppLeadPayload = {
  name: string
  email: string
  projectType: string
  priority: string
  budgetEstimate: string
}

export async function sendWhatsAppLeadAlert(
  payload: WhatsAppLeadPayload
) {
  if (
    !process.env.TWILIO_ACCOUNT_SID ||
    !process.env.TWILIO_AUTH_TOKEN ||
    !process.env.TWILIO_WHATSAPP_FROM ||
    !process.env.TWILIO_WHATSAPP_TO
  ) {
    console.warn("WhatsApp env variables missing.")
    return
  }

  const message = `
🔥 New SuperILM Tech Lead

👤 Name: ${payload.name}
📧 Email: ${payload.email}
💼 Service: ${payload.projectType}

⭐ Priority: ${payload.priority.toUpperCase()}
💰 Budget: ${payload.budgetEstimate}

Reply quickly while lead is hot.
  `

  await client.messages.create({
    from: process.env.TWILIO_WHATSAPP_FROM,
    to: process.env.TWILIO_WHATSAPP_TO,
    body: message,
  })
}