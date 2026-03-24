import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MapPin, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  company: z.string().min(2, "Empresa é obrigatória"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  city: z.string().min(2, "Cidade é obrigatória"),
  usesPromob: z.enum(["sim", "nao"]),
  message: z.string().optional(),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      usesPromob: "sim",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form data:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solicite um Orçamento
          </h2>
          <p className="text-slate-600 text-lg">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            entender as necessidades do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-slate-600 mb-8">
                  Agradecemos o contato. Nossa equipe retornará em breve.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="rounded-full"
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" {...register("name")} />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa / Marcenaria</Label>
                    <Input id="company" {...register("company")} />
                    {errors.company && (
                      <p className="text-red-500 text-sm">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                    <Input id="phone" {...register("phone")} />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Cidade / Estado</Label>
                  <Input id="city" {...register("city")} />
                  {errors.city && (
                    <p className="text-red-500 text-sm">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label>Você já utiliza o Promob?</Label>
                  <RadioGroup
                    defaultValue="sim"
                    onValueChange={(val) =>
                      setValue("usesPromob", val as "sim" | "nao")
                    }
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="r1" />
                      <Label htmlFor="r1" className="font-normal cursor-pointer">
                        Sim
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="r2" />
                      <Label htmlFor="r2" className="font-normal cursor-pointer">
                        Não
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (Opcional)</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="resize-none"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-full text-lg font-semibold"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Informações de Contato
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Estamos prontos para atender sua marcenaria com excelência.
                Entre em contato pelos nossos canais de atendimento ou venha nos
                fazer uma visita.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telefone</h4>
                  <p className="text-slate-600">(11) 99999-9999</p>
                  <p className="text-slate-600">(11) 3333-3333</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Endereço</h4>
                  <p className="text-slate-600">
                    Av. das Indústrias, 1000
                    <br />
                    Distrito Industrial - São Paulo, SP
                    <br />
                    CEP: 00000-000
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
