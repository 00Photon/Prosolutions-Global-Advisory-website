"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/80 z-10" />
        {backgroundImage && (
          <div className="relative h-full w-full">
            <Image
              src={backgroundImage || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover opacity-50"
              sizes="100vw"
              priority
            />
          </div>
        )}
      </div>
      <div className="container relative z-20 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}
