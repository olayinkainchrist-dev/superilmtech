import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | SuperILM Tech",
  description:
    "Contact SuperILM Tech for software development, SaaS platforms, AI tools, POS systems, cloud applications, dashboards, and enterprise systems.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
              Let’s build your next digital product.
            </h1>

            <p className="mt-6 leading-8 text-slate-400">
              Contact SuperILM Tech for business websites, dashboards, SaaS
              platforms, POS systems, AI tools, cloud solutions, and custom
              enterprise software.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-cyan-400" />
                hello@superilmtech.com
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="text-cyan-400" />
                +234 805 248 0026
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
                This form can be connected to a backend API, Formspree, Resend,
                EmailJS, or your custom SuperILM backend.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}