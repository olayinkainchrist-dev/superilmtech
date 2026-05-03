import { Layers3, Rocket, ShieldCheck } from "lucide-react"

export default function About() {
  return (
    <section className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            About Super Technologies
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            We build technology that helps businesses operate smarter.
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Super Technologies is a modern technology company focused on software
            engineering, SaaS platforms, AI tools, business automation, data
            systems, and cloud-ready enterprise applications.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            Our mission is to help businesses move from manual, outdated, and
            disconnected operations into scalable digital systems that can grow
            with them.
          </p>
        </div>

        <div className="space-y-5">
          <div className="glass rounded-3xl p-6">
            <Rocket className="mb-4 text-cyan-400" />
            <h3 className="text-xl font-black">Vision</h3>
            <p className="mt-3 leading-7 text-slate-400">
              To become a trusted African technology brand building global-grade
              software products and digital business infrastructure.
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <Layers3 className="mb-4 text-cyan-400" />
            <h3 className="text-xl font-black">Mission</h3>
            <p className="mt-3 leading-7 text-slate-400">
              To design, build, and deploy scalable software systems that solve
              real business problems and create measurable value.
            </p>
          </div>

          <div className="glass rounded-3xl p-6">
            <ShieldCheck className="mb-4 text-cyan-400" />
            <h3 className="text-xl font-black">Trust</h3>
            <p className="mt-3 leading-7 text-slate-400">
              We focus on secure architecture, clean code, maintainability,
              performance, and long-term business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}