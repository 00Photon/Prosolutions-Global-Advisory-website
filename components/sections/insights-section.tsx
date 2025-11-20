"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

const insights = [
  {
    title: "Global Mobility Trends 2025",
    date: "Nov 15, 2024",
    category: "Citizenship",
    image: "/diverse-travelers-world-map.png",
    excerpt: "Analyzing the shift in global migration patterns and the rise of digital nomad visas.",
  },
  {
    title: "UAE Corporate Tax Update",
    date: "Nov 10, 2024",
    category: "Corporate",
    image: "/finance-growth.png",
    excerpt: "Essential guide for international businesses operating in the UAE under the new tax regime.",
  },
  {
    title: "Prime Real Estate Markets",
    date: "Oct 28, 2024",
    category: "Investment",
    image: "/modern-city-building.png",
    excerpt: "Top performing luxury property markets for international investors this quarter.",
  },
]

export function InsightsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">
              Expert analysis and updates on global business, investment, and mobility.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/insights">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group border-slate-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-secondary transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary" asChild>
                    <Link href="#">Read More &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
