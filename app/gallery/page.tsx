import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | CustomCraft Manufacturing",
  description:
    "Browse our portfolio of custom t-shirts, caps, bags, and promotional items. See the quality and craftsmanship that sets us apart.",
}

export default function Gallery() {
  const categories = [
    { name: "All", filter: "all" },
    { name: "T-Shirts", filter: "tshirts" },
    { name: "Caps", filter: "caps" },
    { name: "Bags", filter: "bags" },
    { name: "Promotional", filter: "promotional" },
  ]

  const galleryItems = [
    { id: 1, category: "tshirts", title: "Corporate T-Shirts", image: "/placeholder.svg?height=400&width=400" },
    { id: 2, category: "caps", title: "Embroidered Caps", image: "/placeholder.svg?height=400&width=400" },
    { id: 3, category: "bags", title: "Custom Tote Bags", image: "/placeholder.svg?height=400&width=400" },
    { id: 4, category: "promotional", title: "Branded Mugs", image: "/placeholder.svg?height=400&width=400" },
    { id: 5, category: "tshirts", title: "Event T-Shirts", image: "/placeholder.svg?height=400&width=400" },
    { id: 6, category: "caps", title: "Sports Team Caps", image: "/placeholder.svg?height=400&width=400" },
    { id: 7, category: "bags", title: "Eco-Friendly Bags", image: "/placeholder.svg?height=400&width=400" },
    { id: 8, category: "promotional", title: "Custom Aprons", image: "/placeholder.svg?height=400&width=400" },
    { id: 9, category: "tshirts", title: "Fashion T-Shirts", image: "/placeholder.svg?height=400&width=400" },
    { id: 10, category: "caps", title: "Trucker Hats", image: "/placeholder.svg?height=400&width=400" },
    { id: 11, category: "bags", title: "Canvas Bags", image: "/placeholder.svg?height=400&width=400" },
    { id: 12, category: "promotional", title: "Mouse Pads", image: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our portfolio of custom manufacturing projects. See the quality and craftsmanship that defines our
              work.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.filter}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our quality and reliability</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Products Delivered" },
              { number: "1,000+", label: "Happy Clients" },
              { number: "15+", label: "Product Categories" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert manufacturing services and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
