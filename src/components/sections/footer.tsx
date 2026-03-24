import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white/70 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tighter text-white mb-6">
              MADEIRA<span className="text-orange-500">MAR</span>
            </div>
            <p className="max-w-sm leading-relaxed mb-6">
              Excelência B2B em marcenaria. Soluções completas para lojas de
              móveis planejados e marceneiros profissionais.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="hover:text-orange-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-orange-500 transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-orange-500 transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#promob" className="hover:text-orange-500 transition-colors">
                  Promob
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>(11) 99999-9999</li>
              <li>(11) 3333-3333</li>
              <li>contato@madeiramar.com.br</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Madeiramar. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
