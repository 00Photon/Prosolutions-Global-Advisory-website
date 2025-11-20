"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, FileCheck, Home, Briefcase, Landmark, Globe2, CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    title: "Citizenship-by-Investment (CBI) Advisory",
    description:
      "Expert guidance on acquiring second citizenship through approved government investment programs. We provide comparative analysis of all leading options (e.g., Caribbean, Malta, Turkey) based on your goals.",
    icon: Globe2,
  },
  {
    title: "Residency-by-Investment (RBI) Advisory",
    description:
      'Securing permanent or temporary residency ("Golden Visas") in desirable jurisdictions (e.g., Portugal, Greece, UAE, USA) through real estate or other qualified investments.',
    icon: Landmark,
  },
  {
    title: "Full Application & Case Management",
    description:
      "We manage the entire application process, ensuring all documentation is meticulously prepared, certified, and submitted. We act as your liaison with government bodies and local agents.",
    icon: FileCheck,
  },
  {
    title: "Executive & Family Relocation",
    description:
      'Our bespoke relocation service ensures a "soft landing" in your new country. Services include home search, school selection, utility setup, and local registration.',
    icon: Home,
  },
  {
    title: "Global Mobility for Corporates",
    description:
      "Assisting companies with the seamless international relocation of key executives and employees, including visa and work permit processing.",
    icon: Briefcase,
  },
  {
    title: "Tax Domicile Planning",
    description:
      "In conjunction with our legal partners, we advise on structuring your affairs to align with your new residency or citizenship, ensuring tax efficiency and compliance.",
    icon: Plane,
  },
]

export default function CitizenshipRelocationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Second Citizenship & Global Relocation"
        subtitle="Your Gateway to Global Mobility and Security"
        backgroundImage="/caribbean-luxury-resort-beach.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Secure Your Future with Global Mobility</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In an increasingly uncertain world, global mobility has become a primary asset for successful
                individuals and their families. A second citizenship or alternative residency provides a powerful tool
                for asset protection, tax planning, and personal freedom.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prosolutions Global Advisory is a leading specialist in residency and citizenship-by-investment
                (CBI/RBI) programs. We provide discreet, expert guidance on navigating the complex application processes
                of the world's most reputable programs. Our service is end-to-end, from initial program selection and
                compiling your dossier to post-approval support and a seamless relocation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/diverse-travelers-world-map.png" alt="Global Mobility" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <CHANGE> Added new visual sections with images and animations */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/caribbean-luxury-resort-beach.jpg"
                  alt="Citizenship Programs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-primary">Leading Citizenship Programs</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in the world's most prestigious citizenship-by-investment programs, offering you access to
                enhanced global mobility, business opportunities, and security for your family.
              </p>
              <ul className="space-y-3">
                {[
                  "Caribbean programs (St. Kitts, Antigua, Dominica)",
                  "European citizenship (Malta, Turkey)",
                  "Vanuatu Pacific citizenship",
                  "Fast-track processing options",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold text-primary">Seamless Relocation Services</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Moving to a new country is more than just paperwork. Our comprehensive relocation services ensure you
                and your family settle comfortably into your new home with minimal stress.
              </p>
              <ul className="space-y-3">
                {[
                  "Property search and acquisition",
                  "School enrollment assistance",
                  "Healthcare registration",
                  "Cultural orientation and integration",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/modern-city-building.png"
                  alt="Family Relocation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Popular Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the world's most sought-after residency and citizenship programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Caribbean Islands",
                image: "/caribbean-luxury-resort-beach.jpg",
                description: "Fast-track citizenship with visa-free travel to 140+ countries",
              },
              {
                title: "European Union",
                image: "/modern-city-building.png",
                description: "Access to EU markets and lifestyle through Golden Visa programs",
              },
              {
                title: "Middle East",
                image: "/dubai-skyline-office.jpg",
                description: "Tax-efficient residency in dynamic business hubs",
              },
            ].map((destination, index) => (
              <motion.div
                key={destination.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img src={destination.image || "/placeholder.svg"} alt={destination.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{destination.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{destination.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* </CHANGE> */}

      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-primary">Welcome To A World Of Unlimited Opportunities</h2>
            <p className="text-xl text-muted-foreground">
              Discover how a second citizenship or new residency can secure your future.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 rounded-full" asChild>
              <Link href="/contact">Request Confidential Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
