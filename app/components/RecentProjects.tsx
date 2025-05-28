import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function RecentProjects() {
  const projects = [
    {
      title: "Corporate Rebrand Campaign",
      client: "TechCorp Solutions",
      category: "Corporate Apparel",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete uniform redesign for 500+ employees across 12 locations.",
      results: ["500+ Uniforms", "12 Locations", "2 Week Delivery"],
    },
    {
      title: "Restaurant Chain Uniforms",
      client: "Bella Vista Restaurants",
      category: "Food Service",
      image: "/placeholder.svg?height=300&width=400",
      description: "Custom aprons and chef hats for a growing restaurant chain.",
      results: ["25 Restaurants", "Custom Design", "Eco-Friendly Materials"],
    },
    {
      title: "University Merchandise",
      client: "State University",
      category: "Education",
      image: "/placeholder.svg?height=300&width=400",
      description: "Graduation merchandise and promotional items for 10,000+ students.",
      results: ["10K+ Items", "Multiple Products", "Rush Delivery"],
    },
    {
      title: "Sports Team Gear",
      client: "City Basketball League",
      category: "Sports",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete team uniforms and fan merchandise for professional league.",
      results: ["20 Teams", "Fan Merchandise", "Performance Fabrics"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Recent Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Our Latest Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses transform their brand
            presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{project.client}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.results.map((result, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
