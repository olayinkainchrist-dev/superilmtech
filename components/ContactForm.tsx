"use client"

import { FormEvent, useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("")
  const [message, setMessage] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          companyWebsite,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Message could not be sent.")
      }

      setSuccess("Message sent successfully. SuperILM Tech will get back to you soon.")
      setName("")
      setEmail("")
      setProjectType("")
      setMessage("")
      setCompanyWebsite("")
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-7">
      <div className="grid gap-5">
        <input
          className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
          placeholder="Full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
          placeholder="Project type e.g. SaaS, POS, Website, AI Tool"
          value={projectType}
          onChange={(event) => setProjectType(event.target.value)}
          required
        />

        <input
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          value={companyWebsite}
          onChange={(event) => setCompanyWebsite(event.target.value)}
          aria-hidden="true"
        />

        <textarea
          className="min-h-40 rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
          placeholder="Tell us about your project..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        {success && (
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-sm text-green-300">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-blue-600 px-7 py-4 font-black text-white shadow-glow transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Project Request"}
        </button>

        <p className="text-sm text-slate-500">
          Your message will be sent securely to SuperILM Tech.
        </p>
      </div>
    </form>
  )
}