import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const fronts = [
  "1/2 Cava Andorinha", "Ripado", "Moldura + Palha", "Muxarabi",
  "Vazado", "Cava Italiana Central", "Cava Italiana", "Cava Andorinha",
  "Cava 45°", "Provençal", "Americana", "Moldura"
];

// Placeholder gradients to visually represent different styles
const gradients = [
  "from-slate-200 to-slate-300", "from-stone-200 to-stone-400", "from-blue-100 to-blue-200", "from-zinc-200 to-zinc-400",
  "from-gray-100 to-gray-300", "from-slate-300 to-slate-500", "from-neutral-200 to-neutral-400", "from-gray-200 to-gray-400",
  "from-stone-100 to-stone-300", "from-slate-100 to-slate-200", "from-zinc-100 to-zinc-200", "from-blue-50 to-blue-100"
];

export function SpecialFronts() {
  return (
    <section id="fronts" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Frentes Especiais
          </h2>
          <p className="text-muted-foreground text-lg">
            Adicione valor e exclusividade aos seus projetos com nossa linha completa de frentes e acabamentos premium.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {fronts.map((front, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl">
                <div className={`aspect-square w-full bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <div className="p-4 text-center bg-white border-t border-border/50">
                  <h3 className="font-semibold text-primary text-sm md:text-base font-display">
                    {front}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
