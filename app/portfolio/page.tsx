import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { portfolio } from "@/data/site"
import { ArrowUpRight, PlayCircle, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | SuperILM Tech",
  description:
    "View SuperILM Tech portfolio projects including POS systems, machine learning platforms, business dashboards, and enterprise software.",
}

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Production-minded technology projects built for business value.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SuperILM Tech focuses on practical products that solve real
            operational problems, improve decisions, and prepare businesses for
            scalable digital growth.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {portfolio.map((project) => (
              <article
                key={project.title}
                className="glass group overflow-hidden rounded-3xl border border-white/10 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
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
                    <div className="h-56 rounded-t-3xl bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-yellow-400/20 p-5">
                      <div className="h-full rounded-xl border border-white/10 bg-slate-950/60 p-4">
                        <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                        <div className="mb-3 h-3 w-full rounded-full bg-white/10" />
                        <div className="mb-3 h-3 w-4/5 rounded-full bg-white/10" />
                        <div className="mt-8 h-12 rounded-xl bg-blue-600/30" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-black">{project.title}</h2>

                    {project.productUrl && (
                      <a
                        href={project.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300"
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
                          className="rounded-2xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-200"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}

                  {project.productUrl && (
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={project.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-blue-500"
                      >
                        <ShoppingCart size={16} />
                        Buy on Gumroad
                      </a>

                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                      >
                        Request Custom Version
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}