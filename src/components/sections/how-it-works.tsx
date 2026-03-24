import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Envie seu projeto",
    desc: "Encaminhe seu projeto via Promob ou especificações técnicas detalhadas.",
  },
  {
    num: "02",
    title: "Orçamento preciso",
    desc: "Receba um orçamento transparente e detalhado com nossa tabela de preços.",
  },
  {
    num: "03",
    title: "Produção industrial",
    desc: "Produzimos com precisão milimétrica e organizamos por ambiente.",
  },
  {
    num: "04",
    title: "Entrega garantida",
    desc: "Entregamos tudo embalado, etiquetado e pronto para a montagem ágil.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Um fluxo de trabalho simplificado para você focar no que importa:
            vender e encantar seu cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-5xl font-black text-white/10 mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
