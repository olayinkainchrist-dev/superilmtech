import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
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
                superilmtech@gmail.com | admin@superilmtech.com
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="text-cyan-400" />
                +234 805 248 0026 | +234 903 032 0363
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-cyan-400" />
                Lagos, Nigeria — serving global clients
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}