"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { caseStudies } from "@/lib/case-studies"

export function PortfolioSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Explore real case studies that show how we structure companies, unlock mobility, and secure cross-border assets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/case-studies/${project.slug}`}>
                <Card className="overflow-hidden border-none shadow-md group h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.heroImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="text-sm text-muted-foreground mb-2">{project.location}</div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
