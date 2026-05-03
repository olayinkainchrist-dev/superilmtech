"use client"

import { useEffect, useState } from "react"
import { products as staticProducts } from "@/data/site"
import SectionHeader from "./SectionHeader"
import { ArrowUpRight } from "lucide-react"
import { apiFetch } from "@/lib/api"

type ProductType = {
  id?: number
  name?: string
  title?: string
  description?: string
  price?: number
  category?: string
  features?: string[]
}

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    apiFetch("/products/")
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setProducts(staticProducts) // fallback to static
        setLoading(false)
      })
  }, [])

  return (
    <section id="products" className="bg-white/[0.03] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Products"
          title="SaaS-ready products from SuperILM Technologies"
          description="Our product ecosystem is designed to grow from standalone business tools into subscription-ready SaaS platforms."
        />

        {/* 🔄 Loading */}
        {loading && (
          <div className="text-center text-slate-400">
            Loading products...
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id ?? product.title ?? index}
              className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-2xl transition hover:-translate-y-2 hover:border-blue-500/50"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-cyan-300">
                  {product.category ?? "Product"}
                </span>

                <ArrowUpRight className="text-slate-400" />
              </div>

              <h3 className="text-2xl font-black">
                {product.name ?? product.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {product.description ?? "No description available"}
              </p>

              {/* 💰 Show price only if from backend */}
              {product.price && (
                <p className="mt-3 text-cyan-400 font-bold">
                  ₦{product.price}
                </p>
              )}

              {/* 🔹 Features (only static fallback has this) */}
              {product.features && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}