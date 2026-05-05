import { solutions } from "@/data/site"
import SectionHeader from "./SectionHeader"

export default function Solutions() {
  return (
    <section id="solutions" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Solutions"
          title="Systems that solve business problems, not just pages on a screen"
          description="SuperILM Tech builds practical software infrastructure for companies that need better operations, faster decisions, digital automation, and scalable revenue systems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon

            return (
              <div
                key={solution.title}
                className="glass group rounded-3xl p-7 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black">{solution.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}