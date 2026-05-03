import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Ready to build your next technology product?
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Tell us what you want to build. SuperILM Tech can help with business
            websites, dashboards, SaaS platforms, POS systems, AI tools, cloud
            systems, and custom software.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="text-cyan-400" />
              superilmtech@gmail.com | hello@superilmtech.com
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="text-cyan-400" />
              +2348052480026 | +2349030320363
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="text-cyan-400" />
              Lagos, Nigeria — serving global clients
            </div>
          </div>
        </div>

        <form className="glass rounded-3xl p-7">
          <div className="grid gap-5">
            <input
              className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              placeholder="Full name"
            />

            <input
              className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              placeholder="Email address"
              type="email"
            />

            <input
              className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              placeholder="Project type e.g. SaaS, POS, Website, AI Tool"
            />

            <textarea
              className="min-h-40 rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 outline-none transition focus:border-blue-500"
              placeholder="Tell us about your project..."
            />

            <button
              type="button"
              className="rounded-full bg-blue-600 px-7 py-4 font-black text-white shadow-glow transition hover:bg-blue-500"
            >
              Send Project Request
            </button>

            <p className="text-sm text-slate-500">
              Note: connect this form later to Formspree, Resend, EmailJS, or a
              custom backend API.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}