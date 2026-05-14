"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { portfolio } from "@/data/site"
import SectionHeader from "./SectionHeader"

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
          {portfolio.map((project) => (
            <div
              key={project.title}
              className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* VIDEO / PREVIEW */}
              <div className="relative overflow-hidden border-b border-white/10">
                {project.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-64 w-full object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
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

                {project.productUrl && (
                  <Link
                    href={project.productUrl}
                    target="_blank"
                    className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition hover:bg-cyan-500"
                  >
                    View Product
                    <ArrowUpRight size={16} />
                  </Link>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* TAGS */}
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

                {/* METRICS */}
                {project.metrics && (
                  <div className="mt-6 space-y-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-200"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {project.productUrl && (
                  <div className="mt-8">
                    <Link
                      href={project.productUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-black text-white transition hover:bg-blue-500"
                    >
                      Buy / View Product
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}