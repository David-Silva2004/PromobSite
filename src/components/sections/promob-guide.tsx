import { motion } from "framer-motion"
import { FileCode2, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState, useEffect } from "react"

const steps = [
  "Acesse o Portal Promob (https://portal.promob.com/) e faça login ou crie sua conta.",
  "Encontre a assinatura ou produto adequado para seu escritório.",
  "Se necessário, solicite autorização para uso da licença Madeiramar.",
  "Faça o download do Promob Downloader e instale no seu computador.",
  "Acesse o sistema com suas credenciais e conclua a instalação.",
  "Informe à Madeiramar o serial/licença para vinculação ao seu cadastro.",
  "Inicie seus projetos com os padrões e o fluxo de produção Madeiramar.",
]

export function PromobGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

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
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white rounded-full px-8 h-12 text-lg font-semibold transition-colors cursor-pointer"
              >
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

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                  <FileCode2 className="w-8 h-8 text-blue-500 mr-3" />
                  Guia Completo - Promob com Madeiramar
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Assista ao vídeo a seguir para ver o passo a passo completo com a Madeiramar e o Promob.
                </p>

                <div className="w-full">
                  <video 
                    controls
                    src="/Public/videos/promob-guide.mp4"
                    className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg"
                  >
                    Seu navegador não suporta vídeo em HTML5.
                  </video>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 bg-blue-900 hover:bg-blue-800 text-white rounded-full h-12 font-semibold"
                    >
                      Entendi, obrigado!
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://portal.promob.com', '_blank')}
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full h-12 font-semibold"
                    >
                      Acessar Portal Promob
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
