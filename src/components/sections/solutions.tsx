import { motion } from "framer-motion"
import { Scissors, Layers, Settings, Ruler, Lightbulb, Palette } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"



const solutions = [
  {
    icon: <Scissors className="w-10 h-10" />,
    title: "Corte Profissional",
    description:
      "Corte de precisão milimétrica para otimização máxima de material e produção eficiente.",
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Fita de Borda",
    description:
      "Aplicação de fita de borda com acabamento impecável em centenas de opções de cores.",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Usinagem",
    description:
      "Usinagem para dispositivos de montagem com alta precisão e padronização absoluta.",
  },
  {
    icon: <Ruler className="w-10 h-10" />,
    title: "Ranhuras em MDF",
    description:
      "Ranhuras técnicas e cortes especiais em MDF para projetos personalizados e únicos.",
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Frentes Especiais",
    description:
      "Produção de frentes especiais e acabamentos premium para agregar valor ao seu projeto.",
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Portas De vidro",
    description:
      "Soluções completas em portas de vidro e espelho para projetos de alto padrão.",
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nossas Soluções
          </h2>
          <p className="text-slate-600 text-lg">
            Oferecemos um portfólio completo de serviços para transformar seu
            projeto em realidade com a máxima qualidade e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 transition-all duration-300 hover:bg-blue-500 hover:text-blue-50 hover:scale-110">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
