import Link from "next/link"
import { Star, Quote, ArrowRight } from "lucide-react"

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "CustomCraft exceeded our expectations with their quality and service. Our company t-shirts look amazing and the team was incredibly professional throughout the entire process.",
    },
    {
      name: "Mike Rodriguez",
      company: "Green Earth Cafe",
      role: "Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The custom aprons and bags we ordered have become a signature part of our brand. The quality is outstanding and our customers love them.",
    },
    {
      name: "Emily Chen",
      company: "Sports Academy",
      role: "Operations Manager",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "We've been working with CustomCraft for over 2 years for our team uniforms. Their consistency and attention to detail is unmatched.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with
            CustomCraft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Read More Testimonials
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
