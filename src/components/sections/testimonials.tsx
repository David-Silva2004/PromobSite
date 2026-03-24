import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "A Madeiramar transformou nossa produção. Recebemos as peças organizadas por ambiente, sem erros. Recomendo a todos.",
    author: "João S.",
    role: "Proprietário de Loja de Móveis",
    location: "Santos",
  },
  {
    text: "Trabalhar com o Promob integrado à Madeiramar eliminou o retrabalho. Prazo e qualidade impecáveis.",
    author: "Fernanda M.",
    role: "Marceneira",
    location: "São Paulo",
  },
  {
    text: "Mais de 300 cores disponíveis e uma tabela de preços clara. Facilitou muito nossa operação comercial e o fechamento de vendas.",
    author: "Carlos R.",
    role: "Gerente Comercial",
    location: "São Paulo",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Quote className="w-12 h-12 text-orange-500 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que dizem nossos parceiros
          </h2>
          <p className="text-white/70 text-lg">
            A satisfação dos nossos clientes é o nosso maior diferencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative"
            >
              <p className="text-lg text-white/90 italic mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-orange-400 text-sm font-medium">
                  {testimonial.role}
                </p>
                <p className="text-white/50 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
