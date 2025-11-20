"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Prosolutions provided exceptional guidance during our company's expansion into the UAE. Their knowledge of local regulations and efficiency was impressive.",
    author: "James Wilson",
    role: "CEO, TechGlobal Ltd",
    avatar: "/man.jpg",
  },
  {
    quote:
      "The team made our family's relocation process seamless. From visa processing to finding the perfect property, they handled everything with professionalism.",
    author: "Sarah Chen",
    role: "Private Investor",
    avatar: "/diverse-woman-portrait.png",
  },
  {
    quote:
      "A trusted partner for our international real estate portfolio. Their market insights and discreet approach are exactly what we needed.",
    author: "Michael Al-Fayed",
    role: "Director, Al-Fayed Holdings",
    avatar: "/diverse-businessman.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground">Trusted by global leaders and families worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Quote className="h-24 w-24 text-primary" />
                </div>
                <CardContent className="pt-8 px-8 pb-8 flex flex-col h-full">
                  <div className="mb-6 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 italic mb-8 flex-grow relative z-10">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-primary">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
