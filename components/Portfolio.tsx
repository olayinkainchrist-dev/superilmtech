"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  Code2,
  PlayCircle,
  ShoppingCart,
  Sparkles,
} from "lucide-react"
import { portfolio } from "@/data/site"
import SectionHeader from "./SectionHeader"

type PortfolioProject = {
  title: string
  description: string
  tags: string[]
  video?: string
  productUrl?: string
  liveUrl?: string
  githubUrl?: string
  metrics?: string[]
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Portfolio"
          title="Built like real products, not simple demos"
          description="Production-grade systems focused on scalability, business value, automation, and modern deployment infrastructure."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {(portfolio as PortfolioProject[]).map((project) => {
            const hasProductUrl = Boolean(project.productUrl)
            const hasLiveUrl = Boolean(project.liveUrl)
            const hasGithubUrl = Boolean(project.githubUrl)
            const primaryUrl =
              project.productUrl || project.liveUrl || project.githubUrl

            return (
              <article
                key={project.title}
                className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="relative overflow-hidden border-b border-white/10 bg-slate-950">
                  {project.video ? (
                    <div className="relative aspect-video">
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-xs font-black text-cyan-300 backdrop-blur">
                        <PlayCircle size={14} />
                        Live demo
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-64 items-center justify-center bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-yellow-400/20">
                      <div className="h-40 w-4/5 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                        <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                        <div className="mb-3 h-3 w-full rounded-full bg-white/10" />
                        <div className="mb-3 h-3 w-4/5 rounded-full bg-white/10" />
                        <div className="mt-8 h-12 rounded-xl bg-blue-600/30" />
                      </div>
                    </div>
                  )}

                  {primaryUrl && (
                    <Link
                      href={primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:bg-cyan-500"
                    >
                      View
                      <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.metrics && (
                    <div className="mt-6 space-y-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="flex items-center gap-2 rounded-2xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-200"
                        >
                          <Sparkles size={14} />
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}

                  {(hasProductUrl || hasLiveUrl || hasGithubUrl) && (
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {hasProductUrl && (
                        <Link
                          href={project.productUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-blue-500"
                        >
                          <ShoppingCart size={16} />
                          Buy on Gumroad
                        </Link>
                      )}

                      {hasLiveUrl && (
                        <Link
                          href={project.liveUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-200 transition hover:bg-cyan-400/20"
                        >
                          <ArrowUpRight size={16} />
                          Open Live Demo
                        </Link>
                      )}

                      {hasGithubUrl && (
                        <Link
                          href={project.githubUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                        >
                          <Code2 size={16} />
                          View Code
                        </Link>
                      )}

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                      >
                        Request Custom Version
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}