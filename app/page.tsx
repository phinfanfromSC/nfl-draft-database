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
      <section className="relative py-20 px-4" style={{background: "linear-gradient(135deg, #004aad, #002d6b)"}}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold" style={{color: "#004aad"}}>ND</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 font-heading">NFL Draft Database</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            The most comprehensive NFL Draft resource. Track prospects, analyze team needs, read expert analysis, and
            access the data that matters most for draft day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prospects" className="inline-block px-8 py-3 text-black font-semibold rounded-lg transition-colors" style={{backgroundColor: "#ffde59"}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ffd700"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ffde59"}>
              Explore Prospect Database
            </Link>
            <Link href="/blog" className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white rounded-lg transition-colors" style={{borderColor: "white"}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#004aad"}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white"}}>
              Read Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2 font-heading" style={{color: "#004aad"}}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: "#004aad"}}>Latest Draft Analysis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4" style={{borderLeftColor: "#ffde59"}}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-3 py-1 text-white text-sm rounded-full" style={{backgroundColor: "#004aad"}}>{article.category}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: "#004aad"}}>{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Link href={`/blog/${article.id}`} className="text-sm font-medium hover:underline" style={{color: "#004aad"}}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 text-white" style={{backgroundColor: "#004aad"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Stay Updated on Draft Day</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive prospect updates, draft analysis, and breaking news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 border-2 border-transparent outline-none"
              style={{borderColor: "#ffde59"}}
            />
            <button className="px-6 py-2 text-black font-semibold rounded-lg transition-colors" style={{backgroundColor: "#ffde59"}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#ffd700"} onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ffde59"}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
