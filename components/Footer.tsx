import { Rocket } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <Rocket size={20} />
          </div>

          <div>
            <p className="font-black">SuperILM Tech</p>
            <p className="text-sm text-slate-400">
              Software • SaaS • AI • Cloud Systems
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} SuperILM Tech. All rights reserved.
        </p>
      </div>
    </footer>
  )
}