import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ChevronRight, FileCode2 } from "lucide-react"

export function Hero() {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=2070&auto=format&fit=crop"
          alt="Madeiramar factory background"
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide mb-6">
              Excelência B2B em Marcenaria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-balance leading-[1.1] mb-6"
          >
            Mais precisão, organização e{" "}
            <span className="text-orange-500">valor</span> para seus projetos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 text-balance"
          >
            Soluções completas em corte, fita de borda, usinagem e frentes
            especiais para lojas de móveis planejados e marceneiros
            profissionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-orange-500 text-white hover:bg-orange-600 h-14 px-8 rounded-full text-lg font-bold shadow-lg shadow-orange-500/20"
              onClick={() => scrollTo("#contato")}
            >
              Solicitar Orçamento
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg font-bold backdrop-blur-sm"
              onClick={() => scrollTo("#promob")}
            >
              <FileCode2 className="mr-2 w-5 h-5" />
              Projetos Promob
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
