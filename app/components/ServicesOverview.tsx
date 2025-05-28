import Link from "next/link"
import { Palette, Printer, Package, Truck, Headphones, Shield, ArrowRight } from "lucide-react"

export default function ServicesOverview() {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Professional design services from concept to completion",
      features: ["Logo Design", "Artwork Creation", "Brand Consultation"],
    },
    {
      icon: Printer,
      title: "Printing & Embroidery",
      description: "State-of-the-art printing technology for perfect results",
      features: ["Screen Printing", "Digital Printing", "Embroidery"],
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Professional packaging that enhances your brand",
      features: ["Branded Boxes", "Gift Wrapping", "Bulk Packaging"],
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Reliable delivery worldwide with tracking",
      features: ["Express Delivery", "Bulk Shipping", "Drop Shipping"],
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer support throughout your project",
      features: ["Project Management", "Live Chat", "Phone Support"],
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all products",
      features: ["Quality Control", "Defect Protection", "Remake Guarantee"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">End-to-End Manufacturing Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design concepts to final delivery, we handle every aspect of your custom manufacturing project
            with expertise and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
