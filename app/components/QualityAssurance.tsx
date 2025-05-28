import { Shield, Award, CheckCircle, Target, Microscope, Clock } from "lucide-react"

export default function QualityAssurance() {
  const qualityFeatures = [
    {
      icon: Shield,
      title: "ISO 9001 Certified",
      description: "International quality management standards compliance",
    },
    {
      icon: Microscope,
      title: "Material Testing",
      description: "Rigorous testing of all materials for durability and safety",
    },
    {
      icon: Target,
      title: "Precision Manufacturing",
      description: "State-of-the-art equipment for consistent, accurate results",
    },
    {
      icon: CheckCircle,
      title: "Multi-Point Inspection",
      description: "Every product checked at multiple stages of production",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with remake policy",
    },
    {
      icon: Clock,
      title: "Consistent Delivery",
      description: "On-time delivery with quality never compromised",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-lg">Quality Assurance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Uncompromising Quality Standards</h2>
            <p className="text-xl text-gray-600 mb-8">
              Quality isn't just a promise – it's our foundation. Every product undergoes rigorous testing and
              inspection to ensure it meets our exacting standards.
            </p>

            <div className="space-y-6">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Quality Control Process"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Quality Badges */}
            <div className="absolute -top-6 -left-6 bg-green-500 text-white p-4 rounded-full shadow-lg">
              <Award className="h-8 w-8" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg">
              <Shield className="h-8 w-8" />
            </div>

            {/* Quality Stats */}
            <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">99.8%</div>
              <div className="text-sm text-gray-600">Quality Rate</div>
            </div>
          </div>
        </div>

        {/* Quality Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Quality Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Material Inspection", desc: "All raw materials tested for quality and compliance" },
              { step: "02", title: "Production Monitoring", desc: "Continuous quality checks during manufacturing" },
              { step: "03", title: "Final Inspection", desc: "Comprehensive quality assessment before packaging" },
              { step: "04", title: "Customer Approval", desc: "Final approval and satisfaction guarantee" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
