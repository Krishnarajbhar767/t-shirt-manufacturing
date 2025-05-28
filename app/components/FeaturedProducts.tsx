import Link from "next/link"
import { Shirt, Crown, ChefHat, ShoppingBag } from "lucide-react"

export default function FeaturedProducts() {
  const products = [
    {
      icon: Shirt,
      title: "Custom T-Shirts",
      description: "Premium quality cotton and polyester blend t-shirts with custom printing and embroidery.",
      features: ["100% Cotton Options", "Screen Printing", "Embroidery", "Bulk Orders"],
      href: "/products#tshirts",
    },
    {
      icon: Crown,
      title: "Caps & Hats",
      description: "Professional caps and hats for corporate branding and promotional campaigns.",
      features: ["Adjustable Sizes", "Logo Embroidery", "Various Styles", "Durable Materials"],
      href: "/products#caps",
    },
    {
      icon: ChefHat,
      title: "Custom Aprons",
      description: "High-quality aprons for restaurants, cafes, and promotional events.",
      features: ["Water Resistant", "Custom Printing", "Adjustable Straps", "Professional Grade"],
      href: "/products#aprons",
    },
    {
      icon: ShoppingBag,
      title: "Eco-Friendly Bags",
      description: "Sustainable jute and cotton bags perfect for eco-conscious branding.",
      features: ["Eco-Friendly", "Reusable", "Custom Designs", "Bulk Pricing"],
      href: "/products#bags",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Manufacturing Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specializing in high-quality custom apparel and promotional items with state-of-the-art manufacturing
            processes and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <product.icon className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={product.href} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
