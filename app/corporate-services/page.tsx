"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, FileText, Users, Globe, Calculator, Scale, Monitor, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    title: "Company Formation & Structuring",
    description:
      "We advise on and manage the incorporation of companies in key jurisdictions, including the establishment of trading companies, holding companies, international business companies (IBCs), and limited liability partnerships (LLPs).",
    icon: Building,
  },
  {
    title: "Domiciliary & Registered Agent Services",
    description:
      "Provision of a registered office address, registered agent services, and handling of all statutory mail and legal notices on your company's behalf.",
    icon: FileText,
  },
  {
    title: "Corporate Director & Officer Services",
    description:
      "Appointment of professional directors, nominee shareholders, and company secretaries to satisfy local substance requirements and ensure expert governance.",
    icon: Users,
  },
  {
    title: "International Bank Account Opening",
    description:
      "We leverage our strong relationships with leading international and local banks to facilitate the opening and management of corporate bank accounts.",
    icon: Globe,
  },
  {
    title: "Accounting & Payroll",
    description:
      "Full-service bookkeeping, preparation of financial statements, management accounts, and complete payroll administration for your international staff.",
    icon: Calculator,
  },
  {
    title: "Tax & Regulatory Compliance",
    description:
      "Ensuring your company adheres to all local tax filing deadlines, economic substance requirements, and other regulatory obligations.",
    icon: Scale,
  },
  {
    title: "Back-Office & Virtual Office Solutions",
    description:
      "A complete administrative support solution, including mail handling, dedicated phone lines, and secretarial support.",
    icon: Monitor,
  },
]

export default function CorporateServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Comprehensive Corporate Services"
        subtitle="Establishing, Managing, and Optimising Your Global Business Structures"
        backgroundImage="/business-meeting-handshake-corporate-office.jpg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Your Trusted Partner for Global Business</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prosolutions Global Advisory provides comprehensive company formation and management in all major
                international jurisdictions. We offer the vital support to help companies of all sizes establish and
                sustain operations successfully in foreign markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From full back-office solutions to assistance with complex tax and regulatory compliance, our team acts
                as your trusted partner. We manage the administrative burden, allowing you to focus on your core
                business objectives.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/dubai-skyline-office.jpg" alt="Corporate Office" className="w-full h-full object-cover" />
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
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
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

      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/corporate-meeting-glass-office.jpg"
                  alt="Strategic Corporate Planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-primary">Global Entity Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Managing a global portfolio of entities requires precision and local expertise. Our team ensures that
                your corporate structures remain compliant, efficient, and aligned with your broader business goals.
              </p>
              <ul className="space-y-3">
                {[
                  "Multi-jurisdictional coordination",
                  "Annual statutory filings",
                  "Corporate governance support",
                  "Regulatory liaison services",
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
              <h3 className="text-2xl font-bold text-primary">Financial & Operational Excellence</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond formation, we provide the operational backbone your business needs to thrive. From complex
                accounting to seamless payroll management, we handle the details so you can focus on growth.
              </p>
              <ul className="space-y-3">
                {[
                  "International tax planning",
                  "Cross-border payroll solutions",
                  "Financial reporting & analysis",
                  "Audit coordination",
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
                  src="/financial-analysis-charts-tablet.jpg"
                  alt="Financial Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Corporate Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored services designed to meet the complex needs of modern international business.
          </p>
        </div>
        <div className="container px-4 md:px-6">
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
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Your Trusted Partner for Global Business</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prosolutions Global Advisory provides comprehensive company formation and management in all major
                international jurisdictions. We offer the vital support to help companies of all sizes establish and
                sustain operations successfully in foreign markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From full back-office solutions to assistance with complex tax and regulatory compliance, our team acts
                as your trusted partner. We manage the administrative burden, allowing you to focus on your core
                business objectives.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img src="/dubai-skyline-office.jpg" alt="Corporate Office" className="w-full h-full object-cover" />
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
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
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

      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-primary">Structuring Your Success</h2>
            <p className="text-xl text-muted-foreground">
              Let us build the robust corporate foundation your business needs to thrive internationally.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 rounded-full" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
