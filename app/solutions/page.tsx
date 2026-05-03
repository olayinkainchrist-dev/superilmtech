import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions | SuperILM Tech",
  description:
    "Explore our enterprise solutions including SaaS platforms, AI systems, POS software, and scalable cloud applications for modern businesses.",
}

export default function SolutionsPage() {
  return (
    <main className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Software & AI Solutions
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        We build scalable, production-ready systems for modern businesses
        including SaaS platforms, AI solutions, POS systems, and enterprise software.
      </p>

      <ul className="space-y-4">
        <li>• SaaS Platforms (Web Apps, Dashboards)</li>
        <li>• AI & Automation Systems</li>
        <li>• POS & Retail Systems</li>
        <li>• Custom Enterprise Software</li>
        <li>• Cloud & Backend Infrastructure</li>
      </ul>
    </main>
  )
}