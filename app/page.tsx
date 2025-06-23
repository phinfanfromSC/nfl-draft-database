import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const featuredArticles = [
  {
    id: 1,
    title: "2025 NFL Draft: Complete QB Rankings",
    excerpt: "Our comprehensive breakdown of every quarterback prospect in the 2025 class...",
    date: "2024-12-22",
    category: "Rankings",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Combine Results: Biggest Risers and Fallers",
    excerpt: "Which prospects helped or hurt their draft stock at the NFL Combine...",
    date: "2024-12-21",
    category: "Analysis",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Team Needs: Updated Draft Boards",
    excerpt: "How each NFL team's needs have changed heading into the draft...",
    date: "2024-12-20",
    category: "Team Analysis",
    readTime: "10 min read",
  },
]

const quickStats = [
  { label: "Prospects Tracked", value: "500+" },
  { label: "NFL Teams", value: "32" },
  { label: "Data Points", value: "15K+" },
  { label: "Mock Drafts", value: "25+" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 gradient-brand">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/logo.svg" alt="NFL Draft Database" width={80} height={80} className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 font-heading">NFL Draft Database</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            The most comprehensive NFL Draft resource. Track prospects, analyze team needs, read expert analysis, and
            access the data that matters most for draft day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-secondary hover:bg-yellow-400 text-black font-semibold" asChild>
              <Link href="/prospects">Explore Prospect Database</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-primary"
              asChild
            >
              <Link href="/blog">Read Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2 font-heading">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">Latest Draft Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-secondary">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-brand-primary">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-brand-primary">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Button variant="ghost" size="sm" className="text-brand-primary hover:text-brand-accent" asChild>
                      <Link href={`/blog/${article.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Stay Updated on Draft Day</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive prospect updates, draft analysis, and breaking news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 border-2 border-transparent focus:border-brand-secondary outline-none"
            />
            <Button className="bg-brand-secondary hover:bg-yellow-400 text-black font-semibold">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
