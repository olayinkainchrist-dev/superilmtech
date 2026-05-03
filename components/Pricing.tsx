import { pricing } from "@/data/site"
import SectionHeader from "./SectionHeader"
import { Check } from "lucide-react"

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Pricing"
          title="Flexible packages for serious digital products"
          description="Every business is different. We price based on scope, system complexity, timeline, and required integrations."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.highlighted
                  ? "border-blue-500 bg-blue-600/10 shadow-glow"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.highlighted && (
                <p className="mb-5 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-bold">
                  Recommended
                </p>
              )}

              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black gradient-text">{plan.price}</p>
              <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-slate-300">
                    <Check className="mt-1 shrink-0 text-cyan-400" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-slate-200"
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}