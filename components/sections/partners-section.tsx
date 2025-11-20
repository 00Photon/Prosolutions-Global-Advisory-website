"use client"

import { motion } from "framer-motion"

const partners = [
  "Global Finance Corp",
  "Elite Properties",
  "International Law Group",
  "Wealth Management Partners",
  "Citizenship Experts",
  "Tech Innovations",
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-slate-400 hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
