import { MessageSquare, Palette, Cog, Package, Truck } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We discuss your vision, requirements, and timeline to understand your needs perfectly.",
      details: ["Free consultation", "Requirement analysis", "Timeline planning", "Budget discussion"],
    },
    {
      icon: Palette,
      title: "Design & Approval",
      description: "Our expert designers create mockups and samples for your review and approval.",
      details: ["Custom design creation", "Multiple revisions", "Sample production", "Final approval"],
    },
    {
      icon: Cog,
      title: "Production",
      description: "We manufacture your products using cutting-edge technology and premium materials.",
      details: ["Quality materials", "Advanced machinery", "Skilled craftsmen", "Progress updates"],
    },
    {
      icon: Package,
      title: "Quality Control",
      description: "Every product undergoes rigorous quality inspection before packaging.",
      details: ["Multi-point inspection", "Color accuracy check", "Durability testing", "Final approval"],
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Your order is carefully packaged and shipped with full tracking information.",
      details: ["Secure packaging", "Global shipping", "Real-time tracking", "Delivery confirmation"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">How We Bring Your Vision to Life</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined 5-step process ensures quality results and complete customer satisfaction from start to
            finish.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Our team is ready to help you create amazing custom products. Get in touch for a free consultation and
              quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="tel:+1-555-123-4567"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
