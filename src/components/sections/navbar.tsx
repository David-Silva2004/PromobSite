import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Promob", href: "#promob" },
    { name: "Frentes", href: "#fronts" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className="text-2xl font-black tracking-tighter cursor-pointer text-primary"
          onClick={() => scrollTo("#inicio")}
        >
          MADEIRA<span className="text-orange-500">MAR</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contato")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
          >
            Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-slate-800" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left py-2 text-slate-700 font-medium"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contato")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full mt-2"
          >
            Solicitar Orçamento
          </Button>
        </motion.div>
      )}
    </header>
  )
}
