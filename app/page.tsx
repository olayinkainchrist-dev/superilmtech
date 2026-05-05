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
      <h1 className="sr-only">
        SuperILM Tech - Software Development, SaaS Platforms, AI Solutions, POS
        Systems and Enterprise Technology Company in Nigeria
      </h1>

      <Navbar />

      <Hero />

      <Solutions />

      <Products />

      <About />

      <Capabilities />

      <Portfolio />

      <Pricing />

      <Contact />

      <Footer />
    </main>
  )
}