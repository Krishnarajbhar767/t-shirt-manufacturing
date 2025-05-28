import { Award, Clock, Users, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "ISO certified manufacturing with rigorous quality control at every step.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality standards.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to bringing your vision to life.",
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "State-of-the-art equipment for precision printing and embroidery.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CustomCraft?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in custom manufacturing, we deliver exceptional quality and service that
            exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
