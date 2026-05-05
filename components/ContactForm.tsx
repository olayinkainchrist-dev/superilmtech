"use client"

import { FormEvent, useMemo, useState } from "react"
import { CheckCircle2, Loader2, Send, ShieldCheck, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("")
  const [message, setMessage] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const isReady = useMemo(() => {
    return (
      name.trim().length >= 2 &&
      email.trim().includes("@") &&
      projectType.trim().length >= 3 &&
      message.trim().length >= 10
    )
  }, [name, email, projectType, message])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSuccess("")
    setError("")

    if (!isReady) {
      setError("Please complete all fields. Your message should be at least 10 characters.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          projectType: projectType.trim(),
          message: message.trim(),
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
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          Project Request
        </p>
        <h2 className="mt-3 text-2xl font-black text-white">
          Tell us what you want to build
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Share the business problem, project type, or system you want SuperILM Tech
          to help you design, build, or scale.
        </p>
      </div>

      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Full name
          </label>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Email address
          </label>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Project type
          </label>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="SaaS, POS, Website, AI Tool, Dashboard..."
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            disabled={loading}
            required
          />
        </div>

        <input
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          value={companyWebsite}
          onChange={(event) => setCompanyWebsite(event.target.value)}
          aria-hidden="true"
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-300">
            Project details
          </label>
          <textarea
            className="min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Tell us about your project, business goal, timeline, or current challenge..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            disabled={loading}
            required
          />
          <p className="mt-2 text-xs text-slate-500">
            Minimum 10 characters. Be clear about what you want to build or improve.
          </p>
        </div>

        {success && (
          <div className="flex gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-sm text-green-300">
            <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
            <span>{success}</span>
          </div>
        )}

        {error && (
          <div className="flex gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300">
            <AlertCircle className="mt-0.5 shrink-0" size={18} />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !isReady}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-black text-white shadow-glow transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Sending request...
            </>
          ) : (
            <>
              Send Project Request
              <Send size={18} />
            </>
          )}
        </button>

        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-slate-400">
          <ShieldCheck className="mt-0.5 shrink-0 text-cyan-400" size={18} />
          <p>
            Your message is sent securely, emailed to SuperILM Tech, and saved
            for proper follow-up.
          </p>
        </div>
      </div>
    </form>
  )
}