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