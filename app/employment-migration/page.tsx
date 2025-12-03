"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, Globe2, ShieldCheck, Users2, Plane, BookMarked } from "lucide-react"

const solutions = [
  {
    title: "Executive Work Visa Programs",
    description: "End-to-end visa strategy, documentation, and embassy coordination for C-suite and specialised hires.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Global Mobility Compliance",
    description: "Policy design, employer of record set-up, and tax guidance to keep projects compliant in every market.",
    icon: ShieldCheck,
  },
  {
    title: "Talent Relocation Concierge",
    description: "Family onboarding, schooling, housing, and lifestyle support so leaders land with confidence.",
    icon: Users2,
  },
]

const corridors = [
  { region: "West Africa → UAE", focus: "Family offices and fintech scale-ups entering Dubai and Abu Dhabi." },
  { region: "Nigeria → United Kingdom", focus: "Professional services firms placing partners across London and Manchester." },
  { region: "South Africa → Canada", focus: "Engineering and mining specialists securing Canadian work permits." },
  { region: "Pan-Africa → United States", focus: "L-1 and EB categories for founders expanding to North America." },
]

export default function EmploymentMigrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Employment Migration"
        subtitle="Mobilising leadership teams and key talent with compliant, end-to-end relocation support."
        backgroundImage="/professional-team-office.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Move Critical Talent Without Friction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our employment migration pod combines immigration counsel, HR advisory, and lifestyle concierge services.
                We design compliant pathways for executives and technical specialists so your projects stay on schedule.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-secondary" /> Work and residence permits across Africa, Europe, the Gulf,
                  and North America.
                </li>
                <li className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-secondary" /> Mobility playbooks aligned to your compensation, tax, and
                  governance policies.
                </li>
                <li className="flex items-center gap-3">
                  <BookMarked className="h-5 w-5 text-secondary" /> Documentation audits and training for HR teams to stay
                  ahead of regulatory changes.
                </li>
              </ul>
            </div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/diverse-businessman.png"
                alt="Employment migration support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <solution.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary">Priority Mobility Corridors</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We specialise in high-demand movements for founders, executives, and emerging industry talent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corridors.map((corridor) => (
              <Card key={corridor.region} className="border border-slate-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{corridor.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{corridor.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h3 className="text-3xl font-bold text-primary">Need to Mobilise a Team?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your hiring roadmap and we&apos;ll build a compliant employment migration plan within two weeks.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 rounded-full" asChild>
            <Link href="/contact">Speak with an Advisor</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
