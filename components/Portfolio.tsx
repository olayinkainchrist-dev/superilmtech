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
            <div key={project.title} className="glass rounded-3xl p-7">
              <div className="mb-6 h-44 rounded-2xl bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-yellow-400/20 p-5">
                <div className="h-full rounded-xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                  <div className="mb-3 h-3 w-full rounded-full bg-white/10" />
                  <div className="mb-3 h-3 w-4/5 rounded-full bg-white/10" />
                  <div className="mt-8 h-12 rounded-xl bg-blue-600/30" />
                </div>
              </div>

              <h3 className="text-xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}