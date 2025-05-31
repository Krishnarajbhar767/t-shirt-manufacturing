import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">tshirtfactory</h3>
            <p className="text-gray-300 mb-4">
              We’re your creative collaborators in bringing your brand vision to life through premium custom apparel
              and promotional merchandise.
            </p>
    
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-blue-400">Products</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products#tshirts" className="text-gray-300 hover:text-blue-400">Custom T-Shirts</Link></li>
              <li><Link href="/products#caps" className="text-gray-300 hover:text-blue-400">Caps & Hats</Link></li>
              <li><Link href="/products#aprons" className="text-gray-300 hover:text-blue-400">Aprons</Link></li>
              <li><Link href="/products#bags" className="text-gray-300 hover:text-blue-400">Custom Bags</Link></li>
              <li><Link href="/products#mugs" className="text-gray-300 hover:text-blue-400">Promotional Items</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">
                  Sarvoday Commercial Centre, Near GPO, Salapose Road, Ahmedabad-380001 (Guj.) INDIA
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+91 98984 21198 / +91 98242 71144</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@tshirtfactory.co.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 tshirtfactory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
