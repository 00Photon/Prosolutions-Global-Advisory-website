"use client"

import { PageHeader } from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { programCategories } from "@/lib/investment-programs"

const programs = [
  // CBI
  { id: "grenada", flag: "🇬🇩", name: "Grenada", tagline: "Only Caribbean CBI with E-2 Visa to USA", cost: "$235,000", time: "6–9 months", intro: "A stable, politically neutral Caribbean island nation known as the \"Spice Isle.\" The only CBI program in the region with an E-2 Visa Treaty with the USA.", requirements: "Clean criminal record • Pass due diligence • Age 18+ • No residency required", benefits: ["E-2 Visa access to live/work in USA", "Visa-free to 140+ countries (UK, China, Schengen)", "Dependents up to age 30 + siblings", "Zero worldwide income/wealth/inheritance tax"], investment: "$235,000 donation (family of 4) or $270,000 real estate" },
  { id: "stkitts", flag: "🇰🇳", name: "St. Kitts & Nevis", tagline: "World’s oldest CBI program since 1984", cost: "$250,000", time: "4–6 months", intro: "The original and most prestigious citizenship-by-investment program with unmatched reputation and speed.", requirements: "Clean record • Due diligence • Age 18+ • Interview may apply", benefits: ["157+ visa-free countries", "Hereditary citizenship", "No income/inheritance tax", "Platinum-standard reputation"], investment: "$250,000 donation (family of 4) or $350,000 real estate" },
  { id: "dominica", flag: "🇩🇲", name: "Dominica", tagline: "Most affordable & eco-friendly citizenship", cost: "$200,000", time: "6–9 months", intro: "Known as the \"Nature Isle,\" offering one of the world’s most cost-effective and reputable CBI programs.", requirements: "Clean record • Due diligence • Age 18+", benefits: ["Lowest-cost reputable CBI", "140+ visa-free countries", "No global income tax", "Children up to age 30"], investment: "$200,000 donation or real estate" },
  { id: "turkey", flag: "🇹🇷", name: "Turkey", tagline: "Fast citizenship + E-2 Visa + strategic location", cost: "$400,000", time: "6–8 months", intro: "Eurasian powerhouse with recoverable real estate investment and access to the US E-2 Visa.", requirements: "Age 18+ • Clean record • Hold property 3 years", benefits: ["US E-2 Visa access", "110+ visa-free countries", "Recoverable investment", "Europe-Asia bridge"], investment: "$400,000 real estate (resale after 3 years)" },

  // RBI
  { id: "portugal", flag: "🇵🇹", name: "Portugal Golden Visa", tagline: "Europe’s #1 – only 7 days/year stay", cost: "€250,000", time: "12–18 months", intro: "The leading European residency program with minimal presence and a clear path to EU citizenship.", requirements: "Non-EU • Clean record • Avg. 7 days/year stay", benefits: ["Path to EU passport in 5 years", "Only 7 days/year required", "Schengen freedom", "Full family inclusion"], investment: "€250,000 cultural or €500,000 fund" },
  { id: "uae", flag: "🇦🇪", name: "UAE Golden Visa", tagline: "10-year residency • No minimum stay", cost: "$545,000", time: "1–3 months", intro: "Live tax-free in Dubai/Abu Dhabi with zero stay requirement and family sponsorship.", requirements: "Real estate, funds, or talent route", benefits: ["10-year renewable visa", "No 180-day rule", "Sponsor parents & all children", "0% personal tax"], investment: "AED 2M (~$545K) real estate/funds" },
  { id: "usa-eb5", flag: "🇺🇸", name: "USA EB-5", tagline: "Direct U.S. Green Card via investment", cost: "$800,000", time: "2–5 years", intro: "Permanent residency (Green Card) for you and your family through job-creating investment.", requirements: "Invest in approved project • Create 10 jobs", benefits: ["U.S. Green Card for family", "Live/work anywhere", "Path to citizenship", "In-state tuition"], investment: "$800,000 in Targeted Employment Area" },
  { id: "usa-business", flag: "🇺🇸", name: "U.S. L-1 / EB-2 NIW", tagline: "For executives & top talent – no big investment", cost: "Fees only", time: "1–18 months", intro: "Fast U.S. residency for company owners and exceptional professionals.", requirements: "L-1: 1 year with foreign company • EB-2 NIW: advanced degree + national interest", benefits: ["Start working in USA immediately", "Lower cost", "Direct Green Card path", "Family included"], investment: "Legal & filing fees only" },
]

export default function CitizenshipRelocationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageHeader
        title="Citizenship & Residency by Investment"
        subtitle="Your gateway to global mobility, security, and lifestyle flexibility."
        backgroundImage="/caribbean-luxury-resort-beach.jpg"
      />

      {/* CBI Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Citizenship by Investment</h2>
            <p className="text-xl text-gray-600">Full second citizenship in months — powerful passport & generational security</p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {programs.slice(0, 4).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={p.id} className="border-0">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="w-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 cursor-pointer group">
                      <div className="flex items-center gap-6">
                        <div className="text-6xl lg:text-7xl">{p.flag}</div>
                        <div className="text-left">
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{p.name}</h3>
                          <p className="mt-2 text-lg text-gray-600">{p.tagline}</p>
                          <p className="mt-4 text-orange-600 font-medium flex items-center gap-2">
                            Click to view full details
                            <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <span className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
                          {p.cost}
                        </span>
                        <span className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {p.time}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 lg:px-16 py-10 bg-gradient-to-b from-orange-50 to-white rounded-b-3xl border-t-4 border-orange-200">
                    <div className="max-w-5xl mx-auto space-y-10">
                      <p className="text-lg text-gray-700 leading-relaxed">{p.intro}</p>
                      <Separator className="bg-orange-200" />

                      <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-2xl font-bold text-orange-700 mb-4">Requirements</h4>
                          <p className="text-gray-700">{p.requirements}</p>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-orange-700 mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                            {p.benefits.map(b => (
                              <li key={b} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-orange-600 mt-0.5" />
                                <span className="text-gray-700 text-lg">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 text-center shadow-inner border-2 border-orange-100">
                        <p className="text-3xl font-bold text-gray-900">{p.investment}</p>
                        <p className="text-gray-600 mt-2">Minimum Qualifying Investment</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RBI Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Residency by Investment</h2>
            <p className="text-xl text-gray-600">Live, work & study in the world’s top destinations</p>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            {programs.slice(4).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={p.id} className="border-0">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="w-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 cursor-pointer group">
                      <div className="flex items-center gap-6">
                        <div className="text-6xl lg:text-7xl">{p.flag}</div>
                        <div className="text-left">
                          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">{p.name}</h3>
                          <p className="mt-2 text-lg text-gray-600">{p.tagline}</p>
                          <p className="mt-4 text-teal-600 font-medium flex items-center gap-2">
                            Click to view full details
                            <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <span className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
                          {p.cost}
                        </span>
                        <span className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {p.time}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 lg:px-16 py-10 bg-gradient-to-b from-teal-50 to-white rounded-b-3xl border-t-4 border-teal-200">
                    <div className="max-w-5xl mx-auto space-y-10">
                      <p className="text-lg text-gray-700 leading-relaxed">{p.intro}</p>
                      <Separator className="bg-teal-200" />

                      <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-2xl font-bold text-teal-700 mb-4">Requirements</h4>
                          <p className="text-gray-700">{p.requirements}</p>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-teal-700 mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                            {p.benefits.map(b => (
                              <li key={b} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-teal-600 mt-0.5" />
                                <span className="text-gray-700 text-lg">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-8 text-center shadow-inner border-2 border-teal-100">
                        <p className="text-3xl font-bold text-gray-900">{p.investment}</p>
                        <p className="text-gray-600 mt-2">Minimum Qualifying Investment</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Choose Your Pathway</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click into each pathway to see the featured programs and access detailed breakdowns on dedicated pages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{category.summary}</p>
                    {category.programs.map((program) => (
                      <div key={program.slug} className="border border-slate-100 rounded-xl p-3">
                        <div className="flex flex-col">
                          <span className="font-semibold text-primary">{program.name}</span>
                          <span className="text-xs text-slate-500">{program.minimumInvestment}</span>
                        </div>
                        <Button variant="link" className="px-0 text-secondary" asChild>
                          <Link href={`/programs/${program.slug}`}>View details →</Link>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Get confidential advice from our senior migration experts
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-8 rounded-full font-semibold" asChild>
            <Link href="/contact">Request Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
