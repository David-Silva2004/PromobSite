import { motion } from "framer-motion"
import { CheckCircle2, FileCode2 } from "lucide-react"
import { Button } from "../ui/button"

const steps = [
  "Acesse o Portal Promob (promob.com) e faça login ou crie sua conta.",
  "Encontre a assinatura ou produto adequado para seu escritório.",
  "Se necessário, solicite autorização para uso da licença Madeiramar.",
  "Faça o download do Promob Downloader e instale no seu computador.",
  "Acesse o sistema com suas credenciais e conclua a instalação.",
  "Informe à Madeiramar o serial/licença para vinculação ao seu cadastro.",
  "Inicie seus projetos com os padrões e o fluxo de produção Madeiramar.",
]

export function PromobGuide() {
  return (
    <section id="promob" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Promob com a Madeiramar
          </h2>
          <p className="text-lg text-slate-600">
            A Madeiramar é totalmente compatível com o Promob. Envie seus
            projetos diretamente para nossa fábrica com precisão e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <FileCode2 className="w-8 h-8 text-blue-500 mr-3" />
              Passo a Passo
            </h3>
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 h-12 text-lg font-semibold">
                Baixar Biblioteca Promob
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
              alt="Promob Software Interface"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <p className="text-white text-lg font-medium">
                Integração perfeita para a sua marcenaria.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
