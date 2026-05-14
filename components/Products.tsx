"use client"

import { useEffect, useState } from "react"
import { products as staticProducts } from "@/data/site"
import SectionHeader from "./SectionHeader"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { apiFetch } from "@/lib/api"

type ProductType = {
  id?: number
  name?: string
  title?: string
  description?: string
  price?: number | string
  category?: string
  features?: string[]
  href?: string
  video?: string
  buttonText?: string
  badge?: string
}

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch("/products/")
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setProducts(staticProducts)
        setLoading(false)
      })
  }, [])

  return (
    <section id="products" className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Products"
          title="Production-ready SaaS products from SuperILM Tech"
          description="Professional software products built for real businesses, scalable operations, automation, and cloud deployment."
        />

        {loading && (
          <div className="text-center text-slate-400">
            Loading products...
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id ?? product.title ?? index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* VIDEO */}
              {product.video ? (
                <div className="relative h-60 overflow-hidden">
                  <video
                    src={product.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-60 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-yellow-400/20" />
              )}

              <div className="p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-cyan-300">
                    {product.category ?? "Product"}
                  </span>

                  <ArrowUpRight className="text-slate-400" />
                </div>

                <h3 className="text-3xl font-black text-white">
                  {product.name ?? product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {product.description}
                </p>

                {/* PRICE */}
                {product.price && (
                  <div className="mt-5">
                    <span className="text-3xl font-black text-cyan-400">
                      {product.price}
                    </span>
                  </div>
                )}

                {/* FEATURES */}
                {product.features && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* BADGE */}
                {product.badge && (
                  <div className="mt-6">
                    <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* BUTTON */}
                {product.href && (
                  <div className="mt-8">
                    <Link
                      href={product.href}
                      target="_blank"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-center text-lg font-bold text-white transition hover:opacity-90"
                    >
                      {product.buttonText ?? "Open Product"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}