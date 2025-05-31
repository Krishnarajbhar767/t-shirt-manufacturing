import Link from "next/link"
import { Calendar, ArrowRight, Clock } from "lucide-react"

export default function NewsPreview() {
  const news = [
    {
      title: "New Eco-Friendly Material Options Now Available",
      excerpt:
        "We're excited to introduce our new line of sustainable materials, including organic cotton and recycled polyester options.",
      date: "December 15, 2024",
      readTime: "3 min read",
      category: "Sustainability",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "T-Shirt Expands Production Capacity",
      excerpt:
        "Our new 50,000 sq ft facility is now operational, allowing us to handle larger orders and faster turnaround times.",
      date: "December 10, 2024",
      readTime: "2 min read",
      category: "Company News",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "5 Tips for Designing Effective Corporate Uniforms",
      excerpt:
        "Learn how to create uniforms that not only look professional but also boost employee morale and brand recognition.",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Design Tips",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Latest News & Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Stay Updated with T-Shirt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the latest updates on new products, industry insights, and company news from the T-Shirt team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {article.readTime}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
