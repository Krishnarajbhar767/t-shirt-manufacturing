import type { Metadata } from "next"
import { Star, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Testimonials | CustomCraft Manufacturing",
  description:
    "Read what our clients say about CustomCraft Manufacturing. Trusted by 1000+ businesses for custom apparel and promotional items.",
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Marketing Director",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "CustomCraft exceeded our expectations with their quality and service. Our company t-shirts look amazing and the team was incredibly professional throughout the entire process.",
    },
    {
      name: "Mike Rodriguez",
      company: "Green Earth Cafe",
      role: "Owner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The custom aprons and bags we ordered have become a signature part of our brand. The quality is outstanding and our customers love them. Highly recommended!",
    },
    {
      name: "Emily Chen",
      company: "Sports Academy",
      role: "Operations Manager",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "We've been working with CustomCraft for over 2 years for our team uniforms and promotional items. Their consistency and attention to detail is unmatched.",
    },
    {
      name: "David Thompson",
      company: "Creative Agency",
      role: "Creative Director",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The design team at CustomCraft brought our vision to life perfectly. The custom caps and t-shirts for our client campaign were a huge success.",
    },
    {
      name: "Lisa Park",
      company: "Wellness Center",
      role: "Manager",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Professional service from start to finish. The custom bags and promotional items helped us stand out at trade shows. Great quality and fast delivery!",
    },
    {
      name: "James Wilson",
      company: "Construction Co.",
      role: "HR Director",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "CustomCraft has been our go-to for work uniforms and safety apparel. Their products are durable, comfortable, and always delivered on time.",
    },
  ]

  const clients = [
    { name: "TechStart Inc.", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Green Earth Cafe", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Sports Academy", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Creative Agency", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Wellness Center", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Construction Co.", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Fashion Brand", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Restaurant Chain", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from our satisfied clients who trust CustomCraft for their custom manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 1,000 businesses trust us for their custom apparel and promotional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
            <p className="text-xl text-gray-600">
              We're proud to work with businesses of all sizes across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,000+", label: "Happy Clients" },
              { number: "50,000+", label: "Products Delivered" },
              { number: "99%", label: "Customer Satisfaction" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the CustomCraft difference. Let us help you create amazing custom products that represent your
            brand perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Quote
            </a>
            <a
              href="/gallery"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
