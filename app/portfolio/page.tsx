import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { portfolio } from "@/data/site"

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
              <article key={project.title} className="glass rounded-3xl p-7">
                <div className="mb-6 h-44 rounded-2xl bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-yellow-400/20 p-5">
                  <div className="h-full rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                    <div className="mb-3 h-3 w-full rounded-full bg-white/10" />
                    <div className="mb-3 h-3 w-4/5 rounded-full bg-white/10" />
                    <div className="mt-8 h-12 rounded-xl bg-blue-600/30" />
                  </div>
                </div>

                <h2 className="text-xl font-black">{project.title}</h2>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}