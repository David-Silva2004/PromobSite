import { Navbar } from "./components/sections/navbar"
import { Hero } from "./components/sections/hero"
import { Solutions } from "./components/sections/solutions"
import { Differentiators } from "./components/sections/differentiators"
import { HowItWorks } from "./components/sections/how-it-works"
import { PromobGuide } from "./components/sections/promob-guide"
import { SpecialFronts } from "./components/sections/special-fronts"
import { Testimonials } from "./components/sections/testimonials"
import { Contact } from "./components/sections/contact"
import { Footer } from "./components/sections/footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Differentiators />
        <HowItWorks />
        <PromobGuide />
        <SpecialFronts />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
