"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';

import { Menu, X, ChevronDown } from "lucide-react"
import LOGO from '../../public/images/logo t sirt.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const products = [
    { name: "T-Shirts", href: "/products#tshirts" },
    { name: "Caps", href: "/products#caps" },
    { name: "Aprons", href: "/products#aprons" },
    { name: "Jute Bags", href: "/products#jute-bags" },
    { name: "Cotton Bags", href: "/products#cotton-bags" },
    { name: "Mouse Pads", href: "/products#mouse-pads" },
    { name: "Mugs", href: "/products#mugs" },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src={LOGO} alt="Logo" className=" h-16 w-16" />

            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="pl-6">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
  
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
