import Link from "next/link"
import { navLinks } from "@/data/site"
import { Rocket } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-glow">
            <Rocket size={20} />
          </div>

          <div>
            <p className="text-lg font-black tracking-tight">SuperILM Tech</p>
            <p className="text-xs text-slate-400">Software • SaaS • AI</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
        >
          Start Project
        </Link>
      </div>
    </header>
  )
}