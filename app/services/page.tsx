import type { Metadata } from "next"
import { Palette, Scissors, Package, Headphones, Truck, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | CustomCraft Manufacturing",
  description:
    "Comprehensive custom manufacturing services including design, printing, embroidery, packaging, and logistics. End-to-end solutions for your brand.",
}

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Custom Design Services",
      description:
        "Our expert design team brings your vision to life with professional artwork and creative solutions.",
      features: [
        "Logo Design & Branding",
        "Artwork Creation",
        "Color Matching",
        "Design Consultation",
        "File Preparation",
        "Mockup Creation",
      ],
    },
    {
      icon: Scissors,
      title: "Printing & Embroidery",
      description: "State-of-the-art printing and embroidery services for all your custom apparel needs.",
      features: [
        "Screen Printing",
        "Digital Printing",
        "Heat Transfer",
        "Embroidery",
        "Vinyl Cutting",
        "Sublimation Printing",
      ],
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Professional packaging solutions that enhance your brand presentation and customer experience.",
      features: [
        "Custom Boxes",
        "Branded Packaging",
        "Individual Wrapping",
        "Bulk Packaging",
        "Gift Packaging",
        "Eco-Friendly Options",
      ],
    },
    {
      icon: Headphones,
      title: "Consultation & Support",
      description: "Dedicated support throughout your project with expert guidance and personalized service.",
      features: [
        "Project Consultation",
        "Material Selection",
        "Production Planning",
        "Quality Assurance",
        "24/7 Customer Support",
        "After-Sales Service",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Reliable shipping and logistics solutions to get your products delivered on time, every time.",
      features: [
        "Worldwide Shipping",
        "Express Delivery",
        "Bulk Shipping",
        "Drop Shipping",
        "Tracking Services",
        "Flexible Delivery Options",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure every product meets our high standards.",
      features: [
        "Quality Inspections",
        "Material Testing",
        "Color Accuracy",
        "Durability Testing",
        "Final Approval",
        "Satisfaction Guarantee",
      ],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your requirements, timeline, and budget to create the perfect solution.",
    },
    {
      step: "02",
      title: "Design & Approval",
      description: "Our team creates designs and mockups for your review and approval.",
    },
    {
      step: "03",
      title: "Production",
      description: "We manufacture your products using the latest technology and quality materials.",
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Every product undergoes thorough quality inspection before packaging.",
    },
    {
      step: "05",
      title: "Delivery",
      description: "Your order is carefully packaged and shipped to your specified location.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions from design to delivery. We handle every aspect of your custom
              apparel project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for all your custom manufacturing needs with professional expertise and attention to
              detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and customer satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact our team for a free consultation and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
