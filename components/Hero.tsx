import { stats } from "@/data/site"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden px-6 pb-24 pt-36">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <CheckCircle2 size={16} className="text-cyan-400" />
            Building production-ready technology for modern businesses
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Scalable software, SaaS platforms and AI systems for the future.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            SuperILM Technologies builds professional digital products: business
            websites, cloud software, POS systems, dashboards, AI tools,
            automation platforms, and enterprise-grade applications.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-glow transition hover:bg-blue-500"
            >
              Build With Us
              <ArrowRight size={18} />
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              View Products
            </a>
          </div>
        </div>

        <div className="float glass rounded-3xl p-6 shadow-2xl">
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-5">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-blue-600/20 p-5">
                <p className="text-sm text-cyan-300">SuperILM Technologies Cloud Console</p>
                <h3 className="mt-2 text-2xl font-black">Enterprise Control Center</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/5 p-4">
                    <p className="text-2xl font-black gradient-text">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 p-5">
                <p className="text-sm text-slate-400">System readiness</p>
                <div className="mt-3 h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
                </div>
                <p className="mt-3 text-sm text-slate-300">92% launch-ready architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}