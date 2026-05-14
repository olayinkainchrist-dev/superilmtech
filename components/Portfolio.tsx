import { ExternalLink, PlayCircle, ShoppingCart } from "lucide-react"
import { portfolio } from "@/data/site"
import SectionHeader from "./SectionHeader"

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Portfolio"
          title="Built like real products, not simple demos"
          description="Our project direction focuses on production systems, business value, scalability, and professional deployment."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article
              key={project.title}
              className="glass group overflow-hidden rounded-3xl p-7 transition hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-yellow-400/20 p-3">
                {project.video ? (
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-950">
                    <video
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-bold text-cyan-300 backdrop-blur">
                      <PlayCircle size={14} />
                      Live product demo
                    </div>
                  </div>
                ) : (
                  <div className="h-44 rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                    <div className="mb-3 h-3 w-full rounded-full bg-white/10" />
                    <div className="mb-3 h-3 w-4/5 rounded-full bg-white/10" />
                    <div className="mt-8 h-12 rounded-xl bg-blue-600/30" />
                  </div>
                )}
              </div>

              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-black">{project.title}</h3>

                {project.productUrl && (
                  <a
                    href={project.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <ExternalLink size={18} />
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
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
                  >
                    Request Custom Version
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}