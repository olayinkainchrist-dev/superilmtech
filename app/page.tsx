import About from "@/components/About"
import Capabilities from "@/components/Capabilities"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Portfolio from "@/components/Portfolio"
import Pricing from "@/components/Pricing"
import Products from "@/components/Products"
import Solutions from "@/components/Solutions"

export default function HomePage() {
  return (
    <main>
      {/* SEO H1 (hidden visually but VERY important for Google) */}
      <h1 className="sr-only">
        SuperILM Tech - Software, SaaS, AI and Enterprise Solutions Company
      </h1>

      {/* Header Navigation */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <section>
        <Hero />
      </section>

      <section>
        <Solutions />
      </section>

      <section>
        <Products />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Capabilities />
      </section>

      <section>
        <Portfolio />
      </section>

      <section>
        <Pricing />
      </section>

      <section>
        <Contact />
      </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </main>
  )
}