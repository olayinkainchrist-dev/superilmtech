"use client"

import { FormEvent, useMemo, useState } from "react"
import {
  Brain,
  Lock,
  Mail,
  RefreshCw,
  Search,
  Star,
  Tag,
  Wallet,
} from "lucide-react"

type Lead = {
  id: string
  name: string
  email: string
  service: string
  message: string
  status?: string
  source?: string
  created_at: string
  ai_score?: number
  ai_priority?: string
  ai_budget_estimate?: string
  ai_project_summary?: string
  ai_recommended_next_step?: string
  ai_tags?: string[]
}

export default function AdminLeadsDashboard() {
  const [password, setPassword] = useState("")
  const [leads, setLeads] = useState<Lead[]>([])
  const [search, setSearch] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [unlocked, setUnlocked] = useState(false)

  const filteredLeads = useMemo(() => {
    const query = search.toLowerCase().trim()

    return leads.filter((lead) => {
      const matchesSearch =
        !query ||
        [
          lead.name,
          lead.email,
          lead.service,
          lead.message,
          lead.ai_priority,
          lead.ai_budget_estimate,
          lead.ai_project_summary,
          lead.ai_recommended_next_step,
          ...(lead.ai_tags || []),
        ]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(query))

      const matchesPriority =
        priorityFilter === "all" || lead.ai_priority === priorityFilter

      return matchesSearch && matchesPriority
    })
  }, [leads, search, priorityFilter])

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

  function priorityClass(priority?: string) {
    if (priority === "high") return "border-red-500/30 bg-red-500/10 text-red-300"
    if (priority === "medium")
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
    return "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
  }

  function exportCSV() {
    const rows = filteredLeads.map((lead) => ({
      name: lead.name,
      email: lead.email,
      service: lead.service,
      priority: lead.ai_priority || "",
      score: lead.ai_score || 0,
      budget: lead.ai_budget_estimate || "",
      tags: (lead.ai_tags || []).join(", "),
      next_step: lead.ai_recommended_next_step || "",
      message: lead.message,
      created_at: lead.created_at,
    }))

    const header = Object.keys(rows[0] || {}).join(",")
    const body = rows
      .map((row) =>
        Object.values(row)
          .map((value) => `"${String(value).replaceAll('"', '""')}"`)
          .join(",")
      )
      .join("\n")

    const csv = `${header}\n${body}`
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "superilm-leads.csv"
    link.click()

    URL.revokeObjectURL(url)
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
            Enter your admin password to view AI-qualified project requests.
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
              AI Lead Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-black">SuperILM Project Leads</h1>
            <p className="mt-3 text-slate-400">
              View, search, qualify, and export website leads.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={exportCSV}
              disabled={filteredLeads.length === 0}
              className="rounded-full border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10 disabled:opacity-50"
            >
              Export CSV
            </button>

            <button
              onClick={() => fetchLeads()}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-bold transition hover:bg-white/10 disabled:opacity-60"
            >
              <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <Search size={18} className="text-slate-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, email, service, message, tag..."
              className="w-full bg-transparent outline-none placeholder:text-slate-600"
            />
          </div>

          <select
            value={priorityFilter}
            onChange={(event) => setPriorityFilter(event.target.value)}
            className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 outline-none"
          >
            <option value="all">All priorities</option>
            <option value="high">High priority</option>
            <option value="medium">Medium priority</option>
            <option value="normal">Normal priority</option>
          </select>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <Stat label="Total leads" value={leads.length} />
          <Stat
            label="High priority"
            value={leads.filter((lead) => lead.ai_priority === "high").length}
          />
          <Stat
            label="Medium priority"
            value={leads.filter((lead) => lead.ai_priority === "medium").length}
          />
          <Stat label="Filtered view" value={filteredLeads.length} />
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

                <div className="mt-5 flex flex-wrap gap-3">
                  <Badge>{lead.service}</Badge>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${priorityClass(
                      lead.ai_priority
                    )}`}
                  >
                    <Star size={15} />
                    {lead.ai_priority || "normal"} priority
                  </span>

                  <Badge>
                    <Brain size={15} />
                    Score {lead.ai_score || 0}/100
                  </Badge>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <InfoBox
                    icon={<Wallet size={18} />}
                    label="AI Budget Estimate"
                    value={lead.ai_budget_estimate || "Not estimated"}
                  />

                  <InfoBox
                    icon={<Brain size={18} />}
                    label="Recommended Next Step"
                    value={lead.ai_recommended_next_step || "Follow up manually."}
                  />
                </div>

                {lead.ai_project_summary && (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-sm font-bold text-cyan-300">
                      AI Project Summary
                    </p>
                    <p className="mt-3 leading-7 text-slate-300">
                      {lead.ai_project_summary}
                    </p>
                  </div>
                )}

                {lead.ai_tags && lead.ai_tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {lead.ai_tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-bold text-slate-300"
                      >
                        <Tag size={13} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

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

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-cyan-300">
      {children}
    </span>
  )
}

function InfoBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-center gap-2 text-cyan-300">
        {icon}
        <p className="text-sm font-bold">{label}</p>
      </div>
      <p className="mt-3 leading-7 text-slate-300">{value}</p>
    </div>
  )
}