"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Corporate HQ Relocation",
    category: "Corporate Services",
    location: "Dubai, UAE",
    image: "/dubai-skyline-office.jpg",
  },
  {
    title: "Citizenship by Investment",
    category: "Citizenship",
    location: "St. Kitts & Nevis",
    image: "/caribbean-luxury-resort-beach.jpg",
  },
  {
    title: "Commercial Asset Acquisition",
    category: "Real Estate",
    location: "London, UK",
    image: "/london-modern-architecture-building.jpg",
  },
  {
    title: "Family Office Structuring",
    category: "Advisory",
    location: "Singapore",
    image: "/singapore-marina-bay-sands.png",
  },
]

export function PortfolioSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Global Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              We have helped hundreds of clients achieve their global ambitions through tailored solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-md group cursor-pointer h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
