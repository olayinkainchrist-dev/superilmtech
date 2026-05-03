import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { solutions } from "@/data/site"

export const metadata: Metadata = {
  title: "Solutions | SuperILM Tech",
  description:
    "Explore SuperILM Tech solutions including SaaS platforms, AI systems, POS software, cloud applications, dashboards, and enterprise software.",
}

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Software, SaaS, AI and enterprise solutions for modern businesses.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            SuperILM Tech builds scalable digital systems that help businesses
            automate operations, improve efficiency, serve customers better, and
            grow with reliable technology.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon

              return (
                <div
                  key={solution.title}
                  className="glass rounded-3xl p-7 transition hover:-translate-y-2 hover:border-cyan-400/40"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
                    <Icon size={28} />
                  </div>

                  <h2 className="text-xl font-black">{solution.title}</h2>
                  <p className="mt-4 leading-7 text-slate-400">
                    {solution.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}