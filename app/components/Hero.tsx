import Link from "next/link"
import { ArrowRight, Star, Play, CheckCircle } from "lucide-react"
import Image from 'next/image';
import HERO from '../../public/images/home/Hero.jpg'
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-blue-200">4.9/5 Rating</span>
              </div>
              <div className="flex items-center text-sm text-blue-200">
                <CheckCircle className="h-4 w-4 mr-2" />
                Authentic
              </div>
              <div className="flex items-center text-sm text-blue-200">
                <CheckCircle className="h-4 w-4 mr-2" />
                1000+ Happy Clients
              </div>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Premium
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  {" "}
                  Custom
                </span>
                <br />
                Manufacturing
              </h1>

              <div className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                <p className="mb-4">
                  Transform your brand with{" "}
                  <span className="text-yellow-400 font-semibold">high-quality custom apparel</span> and promotional
                  items.
                </p>
                <p>
                  From concept to delivery, we bring your vision to life with precision, style, and unmatched quality.
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Free Design Consultation", "24-48 Hour Turnaround", "Bulk Order Discounts", "Worldwide Shipping"].map(
                (benefit, index) => (
                  <div key={index} className="flex items-center text-blue-100">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

          
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">10+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-blue-200">Products Made</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">99%</div>
                <div className="text-sm text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <Image 
                  src={HERO}
                  alt="Custom T-shirt Manufacturing Process"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg md:h-[600px] md:w-[500px]"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Premium Quality
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-slate-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Fast Delivery
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6 scale-105"></div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="white"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
