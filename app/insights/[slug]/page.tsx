import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllInsights, getInsightBySlug } from "@/lib/insights"

type InsightPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const insights = await getAllInsights()
  return insights.map((item) => ({ slug: item.slug }))
}

export default async function InsightPage({ params }: InsightPageProps) {
  let insight
  try {
    insight = await getInsightBySlug(params.slug)
  } catch {
    notFound()
  }

  if (!insight) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="relative h-[320px] w-full overflow-hidden">
        <Image
          src={insight.coverImage || "/placeholder.svg"}
          alt={insight.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 container h-full flex flex-col justify-center px-4 md:px-6 text-white">
          <Button variant="ghost" className="w-fit mb-4 text-white hover:bg-white/10" asChild>
            <Link href="/insights">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Insights
            </Link>
          </Button>
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">{insight.category}</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">{insight.title}</h1>
          <div className="mt-4 flex items-center text-sm text-slate-200">
            <Calendar className="mr-2 h-4 w-4" /> {insight.date}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl prose prose-slate">{insight.content}</div>
      </section>
    </div>
  )
}
