import Link from "next/link"
import { Star, Quote, ArrowRight } from "lucide-react"
import Person1 from '../../public/images/home/testomonial1.png'
import Person2 from '../../public/images/home/testomonial2.png'
import Person3 from '../../public/images/home/testomonial3.png'

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Priya Sharma",
      company: "UrbanLeaf Organics",
      role: "Brand Manager",
      image: Person3,
      rating: 5,
      text: "Working with T-ShirtFactory was seamless! The team understood our vision and delivered beautifully crafted merchandise that elevated our brand identity.",
    },
    {
      name: "Rohit Patel",
      company: "Dynatek Solutions",
      role: "Operations Head",
      image: Person2,
      rating: 5,
      text: "From design consultation to delivery, their service was outstanding. The custom uniforms were top-notch and truly helped unify our team’s look.",
    },
    {
      name: "Aman Verma",
      company: "FitFlex Gym",
      role: "Founder",
      image: Person1,
      rating: 5,
      text: "Our gym apparel now gets compliments daily! T-ShirtFactory’s attention to detail and fabric quality is unmatched. Highly recommended.",
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
            T-ShirtFactory.
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
                  src={testimonial.image.src}
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
