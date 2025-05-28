import Link from "next/link"
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join over 1,000 satisfied clients who trust CustomCraft for their custom manufacturing needs. Let's create
            something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
              <p className="text-blue-100 mb-6">
                No commitment required. Our team will provide you with a detailed quote and timeline for your project.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Free design consultation included
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Competitive pricing with bulk discounts
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Fast turnaround times guaranteed
                </div>
                <div className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Quality guarantee on all products
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24-48h</div>
                <div className="text-blue-200 text-sm">Quote Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">7-14</div>
                <div className="text-blue-200 text-sm">Days Production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+1-555-123-4567"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
                <a
                  href="mailto:info@customcraft.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-yellow-400 mr-3" />
                <h4 className="text-lg font-semibold">Need Help Choosing?</h4>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Not sure which products or services are right for you? Our experts are here to help guide you through
                the process.
              </p>
              <Link
                href="/services"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm"
              >
                Explore Our Services →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Why Choose CustomCraft?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50K+</div>
                <div className="text-blue-200">Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
