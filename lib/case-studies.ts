export type CaseStudy = {
  slug: string
  title: string
  category: string
  location: string
  heroImage: string
  summary: string
  challenge: string
  solution: string
  outcome: string
  stats: { label: string; value: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "corporate-hq-relocation",
    title: "Corporate HQ Relocation",
    category: "Corporate Services",
    location: "Dubai, UAE",
    heroImage: "/diverse-businessman.png",
    summary:
      "Managed the full relocation of a pan-African fintech headquarters to Dubai, including entity formation, governance, and banking.",
    challenge:
      "The client needed to relocate rapidly to access regional investors while maintaining compliance across three continents.",
    solution:
      "We incorporated a UAE holding company, secured senior leadership visas, and established multi-currency banking supported by automated governance workflows.",
    outcome:
      "The business transitioned within eight weeks, retained its regulatory approvals, and gained faster investor access through the DIFC ecosystem.",
    stats: [
      { label: "Turnaround Time", value: "8 Weeks" },
      { label: "Operating Jurisdictions", value: "3" },
    ],
  },
  {
    slug: "citizenship-by-investment-family-office",
    title: "Family Citizenship Strategy",
    category: "Citizenship & Mobility",
    location: "Castries, St. Lucia",
    heroImage: "/diverse-woman-portrait.png",
    summary:
      "Structured a custom citizenship-by-investment plan for a multigenerational family office seeking global mobility.",
    challenge:
      "Each family member had distinct travel requirements and complex asset holdings, triggering enhanced due diligence.",
    solution:
      "Coordinated applications across two Caribbean programs, aligned asset disclosures, and provided relocation coaching for dependents.",
    outcome:
      "All applicants were approved on the first submission cycle, unlocking visa-free access to 140+ countries.",
    stats: [
      { label: "Family Members", value: "6" },
      { label: "Passports Approved", value: "100%" },
    ],
  },
  {
    slug: "commercial-asset-acquisition",
    title: "Commercial Asset Acquisition",
    category: "Real Estate Advisory",
    location: "Accra, Ghana",
    heroImage: "/professional-team-office.jpg",
    summary:
      "Advised a diaspora investor syndicate on the acquisition and repositioning of a Grade A commercial asset in Accra.",
    challenge:
      "The target property required restructuring of existing leases and a capital expenditure plan that met ESG benchmarks.",
    solution:
      "Completed valuation analysis, negotiated with anchor tenants, and built a phased CapEx program with local delivery partners.",
    outcome:
      "The syndicate secured the asset under budget and lifted projected NOI by 18% within the first year.",
    stats: [
      { label: "Transaction Size", value: "$4.2M" },
      { label: "Projected NOI Lift", value: "18%" },
    ],
  },
  {
    slug: "family-office-structuring",
    title: "Family Office Structuring",
    category: "Advisory",
    location: "Lagos, Nigeria",
    heroImage: "/diverse-travelers-world-map.png",
    summary:
      "Implemented a governance and reporting framework for a first-generation family office managing multi-market assets.",
    challenge:
      "The founders required institutional-grade controls without adding unnecessary overhead or limiting agility.",
    solution:
      "Designed a three-entity structure with automated reporting, independent directors, and consolidated risk dashboards.",
    outcome:
      "The office achieved audit readiness in six months and unlocked new co-investment opportunities with regional PE funds.",
    stats: [
      { label: "Entities Managed", value: "3" },
      { label: "Audit Readiness", value: "6 Months" },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}
