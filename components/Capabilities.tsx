import { capabilities } from "@/data/site"
import SectionHeader from "./SectionHeader"

export default function Capabilities() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Capabilities"
          title="Modern stack. Scalable architecture."
          description="SuperILM Tech builds with technologies that support clean code, cloud deployment, business analytics, APIs, and future SaaS expansion."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <Icon className="mb-5 text-cyan-400" size={30} />
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}