import { motion } from "framer-motion"
import { ClipboardCheck, Clock, Palette, MonitorPlay } from "lucide-react"

const diffs = [
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Organização Total",
    desc: "Peças enviadas organizadas, etiquetadas, embaladas e separadas por ambiente. Facilita e acelera a montagem.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Prazo Confiável",
    desc: "Prazo de 15 dias úteis com previsibilidade e transparência total para sua linha de produção.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Mais de 300 Cores",
    desc: "Tabela de preços transparente com um catálogo diversificado de mais de 300 opções de cores e texturas.",
  },
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Projetos Promob",
    desc: "Projetos editáveis no Promob, com produção milimétrica sem retrabalho e rastreabilidade total.",
  },
]

export function Differentiators() {
  return (
    <section id="diferenciais" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Por que escolher a Madeiramar?
          </h2>
          <p className="text-slate-600 text-lg">
            Nossos diferenciais são focados em otimizar o seu tempo e garantir a
            qualidade final do seu produto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diffs.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mb-6">
                {diff.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {diff.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
