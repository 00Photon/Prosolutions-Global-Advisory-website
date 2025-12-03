"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const partners = [
  { name: "Allied Strategies", logo: "/partners/allied-strategies.svg" },
  { name: "Heritage Capital", logo: "/partners/heritage-capital.svg" },
  { name: "Pan-Africa Holdings", logo: "/partners/pan-africa-holdings.svg" },
  { name: "Unity Trust Alliance", logo: "/partners/unity-trust-alliance.svg" },
  { name: "Ascent Real Estate", logo: "/partners/ascent-real-estate.svg" },
  { name: "Prime Consulting", logo: "/partners/prime-consulting.svg" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Our Strategic Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-16 w-44 items-center justify-center rounded-lg bg-slate-50/60 px-4 py-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
