import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">About CustomCraft</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Crafting Excellence Since 2014</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just manufacturers – we're your creative partners in bringing brands to life through premium
                custom apparel and promotional items.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600">
                Founded with a vision to revolutionize custom manufacturing, CustomCraft has grown from a small family
                business to a trusted partner for over 1,000 businesses worldwide. Our state-of-the-art facility
                combines traditional craftsmanship with cutting-edge technology.
              </p>

              <p className="text-lg text-gray-600">
                Every product we create tells a story – your story. Whether it's corporate uniforms that build team
                identity, promotional items that spread brand awareness, or custom apparel that makes a statement, we
                ensure every piece meets our exacting standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Manufacturing Process"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Quality Control"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Team at Work"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Finished Products"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 p-4 rounded-full shadow-lg">
              <Award className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
