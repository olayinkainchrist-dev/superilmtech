import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { products } from "@/data/site"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Products | SuperILM Tech",
  description:
    "Discover SuperILM Tech products including SuperILM POS, AI tools, cloud platforms, SaaS systems, and business automation solutions.",
}

export default function ProductsPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            Products
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            SaaS-ready products built for real business operations.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Our product ecosystem is designed to grow from standalone business
            tools into subscription-ready SaaS platforms with dashboards, APIs,
            authentication, analytics, and cloud deployment.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-2xl transition hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-cyan-300">
                    {product.category}
                  </span>

                  <ArrowUpRight className="text-slate-400" />
                </div>

                <h2 className="text-2xl font-black">{product.title}</h2>
                <p className="mt-4 leading-7 text-slate-400">
                  {product.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}