"use client"

import { FormEvent, useMemo, useState } from "react"
import { Lock, Mail, RefreshCw, Search } from "lucide-react"

type Lead = {
  id: string
  name: string
  email: string
  service: string
  message: string
  status?: string
  source?: string
  created_at: string
}

export default function AdminLeadsDashboard() {
  const [password, setPassword] = useState("")
  const [leads, setLeads] = useState<Lead[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [unlocked, setUnlocked] = useState(false)

  const filteredLeads = useMemo(() => {
    const query = search.toLowerCase().trim()

    if (!query) return leads

    return leads.filter((lead) =>
      [lead.name, lead.email, lead.service, lead.message, lead.status, lead.source]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query))
    )
  }, [leads, search])

  async function fetchLeads(currentPassword = password) {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/leads", {
        headers: {
          "x-admin-password": currentPassword,
        },
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Could not load leads.")
      }

      setLeads(data.leads || [])
      setUnlocked(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
      setUnlocked(false)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await fetchLeads(password)
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
            <Lock />
          </div>

          <h1 className="text-3xl font-black">SuperILM Leads Admin</h1>
          <p className="mt-3 text-slate-400">
            Enter your admin password to view submitted project requests.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 outline-none focus:border-blue-500"
              required
            />

            {error && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-blue-600 px-6 py-4 font-black text-white transition hover:bg-blue-500 disabled:opacity-60"
            >
              {loading ? "Checking..." : "Open Dashboard"}
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
              Admin Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-black">Project Leads</h1>
            <p className="mt-3 text-slate-400">
              View contact form submissions saved from SuperILMTech.com.
            </p>
          </div>

          <button
            onClick={() => fetchLeads()}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10 disabled:opacity-60"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
          <Search size={18} className="text-slate-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name, email, service, or message..."
            className="w-full bg-transparent outline-none placeholder:text-slate-600"
          />
        </div>

        <div className="grid gap-5">
          {filteredLeads.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-slate-400">
              No leads found.
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <article
                key={lead.id}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div>
                    <h2 className="text-xl font-black">{lead.name}</h2>
                    <div className="mt-2 flex items-center gap-2 text-slate-400">
                      <Mail size={16} />
                      <a href={`mailto:${lead.email}`} className="hover:text-white">
                        {lead.email}
                      </a>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500">
                    {new Date(lead.created_at).toLocaleString()}
                  </div>
                </div>

                <div className="mt-5 inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-cyan-300">
                  {lead.service}
                </div>

                <p className="mt-5 whitespace-pre-wrap leading-7 text-slate-300">
                  {lead.message}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  )
}