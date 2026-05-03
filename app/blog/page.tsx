import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Blog | SuperILM Tech",
  description:
    "Read SuperILM Tech insights on SaaS, AI, POS systems, business automation, software development, cloud platforms, and enterprise technology.",
}

const posts = [
  {
    title: "Best POS System Features for Retail Businesses in Nigeria",
    description:
      "Learn the essential POS features modern supermarkets, stores, and retail businesses need for sales, inventory, receipts, and reporting.",
    category: "POS Systems",
  },
  {
    title: "How SaaS Platforms Help Businesses Scale Faster",
    description:
      "Understand how SaaS products reduce operational friction, improve accessibility, and create recurring digital business models.",
    category: "SaaS",
  },
  {
    title: "How AI Can Improve Business Operations",
    description:
      "Explore practical ways AI tools can support automation, customer insights, forecasting, reporting, and decision making.",
    category: "AI",
  },
]

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-cyan-400">
            Blog
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Insights on software, SaaS, AI, POS systems and digital business.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Practical articles from SuperILM Tech to help businesses understand
            modern software systems, automation, SaaS products, and digital
            transformation.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="glass rounded-3xl p-7 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <p className="mb-4 inline-flex rounded-full bg-blue-600/20 px-4 py-2 text-sm font-bold text-cyan-300">
                  {post.category}
                </p>

                <h2 className="text-2xl font-black">{post.title}</h2>

                <p className="mt-4 leading-7 text-slate-400">
                  {post.description}
                </p>

                <p className="mt-6 text-sm font-bold text-cyan-400">
                  Full article coming soon →
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}