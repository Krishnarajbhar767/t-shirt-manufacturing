import type { Metadata } from "next"
import { Award, Users, Globe, Zap } from "lucide-react"
import IMAGE from '../../public/images/Office Meeting Room 3D Wall Logo Mockup.png'
import Image from "next/image"
export const metadata: Metadata = {
  title: "About Us | T-Shirt Manufacturing",
  description:
    "Learn about T-Shirt Manufacturing - your trusted partner for premium custom apparel and promotional items with over 10 years of experience.",
}

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every product we manufacture, ensuring durability and premium finish.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our clients are at the heart of everything we do. We build lasting relationships through exceptional service.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable manufacturing processes for a better future.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously investing in new technologies and techniques to deliver cutting-edge solutions.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About T-Shirt Manufacturing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Crafting excellence in custom apparel manufacturing since 2014. Your vision, our expertise, exceptional
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                T-Shirt Manufacturing began as a small family business with a simple mission: to
                provide high-quality custom apparel that helps businesses and organizations express their unique
                identity.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've grown from a local operation to a trusted manufacturing partner for businesses
                across the country. Our commitment to quality, innovation, and customer satisfaction has remained
                unchanged.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve over 1,000 satisfied clients, from small startups to Fortune 500 companies,
                delivering exceptional custom apparel and promotional items that make lasting impressions.
              </p>
            </div>
            <div>
              <Image
                src={IMAGE}
                alt="T-Shirt Manufacturing Facility"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
