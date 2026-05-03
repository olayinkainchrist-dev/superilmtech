import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { pricing } from "@/data/site"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | SuperILM Tech",
  description:
    "View SuperILM Tech pricing options for websites, SaaS platforms, dashboards, POS systems, AI tools, and enterprise software development.",
}

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            Pricing
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Flexible pricing for serious software and SaaS projects.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Every project is priced based on scope, timeline, integrations,
            required features, deployment needs, and long-term scalability.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
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

                <h2 className="text-2xl font-black">{plan.name}</h2>
                <p className="mt-4 text-4xl font-black gradient-text">
                  {plan.price}
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-300">
                      <Check className="mt-1 shrink-0 text-cyan-400" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-8 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-slate-200"
                >
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}