import { Building2, GraduationCap, Stethoscope, Utensils, Dumbbell, Briefcase } from "lucide-react"

export default function IndustryExpertise() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate",
      description: "Professional uniforms and branded apparel for businesses of all sizes.",
      projects: "500+ Projects",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "School uniforms, graduation merchandise, and educational promotional items.",
      projects: "200+ Schools",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Medical scrubs, lab coats, and healthcare facility branding solutions.",
      projects: "150+ Facilities",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Restaurant uniforms, aprons, and food service promotional items.",
      projects: "300+ Restaurants",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Dumbbell,
      title: "Sports & Fitness",
      description: "Team uniforms, gym apparel, and sports promotional merchandise.",
      projects: "100+ Teams",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Briefcase,
      title: "Events & Trade Shows",
      description: "Conference merchandise, trade show giveaways, and event branding.",
      projects: "250+ Events",
      color: "from-pink-500 to-pink-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-lg">Industry Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Serving Diverse Industries</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored solutions that meet specific sector
            requirements and standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <div
                  className={`bg-gradient-to-br ${industry.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <industry.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{industry.projects}</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We work with businesses across all sectors. Our flexible manufacturing capabilities and custom solutions
              can meet any industry's unique requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
