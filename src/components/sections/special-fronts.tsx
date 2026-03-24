import { motion } from "framer-motion"
import { Card } from "../ui/card"

const fronts = [
  "1/2 Cava Andorinha",
  "Ripado",
  "Moldura + Palha",
  "Muxarabi",
  "Vazado",
  "Cava Italiana Central",
  "Cava Italiana",
  "Cava Andorinha",
  "Cava 45°",
  "Provençal",
  "Americana",
  "Moldura",
]

const gradients = [
  "from-slate-200 to-slate-300",
  "from-stone-200 to-stone-400",
  "from-blue-100 to-blue-200",
  "from-zinc-200 to-zinc-400",
  "from-gray-100 to-gray-300",
  "from-slate-300 to-slate-500",
  "from-neutral-200 to-neutral-400",
  "from-gray-200 to-gray-400",
  "from-stone-100 to-stone-300",
  "from-slate-100 to-slate-200",
  "from-zinc-100 to-zinc-200",
  "from-blue-50 to-blue-100",
]

export function SpecialFronts() {
  return (
    <section id="fronts" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frentes Especiais
          </h2>
          <p className="text-slate-600 text-lg">
            Adicione valor e exclusividade aos seus projetos com nossa linha
            completa de frentes e acabamentos premium.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {fronts.map((front, index) => (
            <motion.div
              key={front}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all group cursor-pointer h-full">
                <div
                  className={`h-32 bg-gradient-to-br ${gradients[index]} group-hover:scale-105 transition-transform duration-500`}
                />
                <div className="p-4 text-center bg-white">
                  <h3 className="font-semibold text-slate-800">{front}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
