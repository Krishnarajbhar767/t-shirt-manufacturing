import type { Metadata } from "next";
import {
  Shirt,
  Crown,
  ChefHat,
  ShoppingBag,
  Mouse,
  Coffee,
} from "lucide-react";
import Image from "next/image";

import TShirt from "../../public/images/product/custom shirt.jpg";
import CustomJuteBag from "../../public/images/product/customg jute bag.webp";
import CustomMug from "../../public/images/product/custom mugs.webp";
import MousePad from "../../public/images/product/custom mousepad.webp";
import CottonBag from "../../public/images/product/custom cotton bags.webp";
import Cap from "../../public/images/product/custom cap.jpg";
import Arpon from "../../public/images/product/custom arpon.jpg";

export const metadata: Metadata = {
  title: "Products | T-Shirt Manufacturing",
  description:
    "Explore our range of custom manufacturing services including t-shirts, caps, aprons, bags, mouse pads, and mugs. Premium quality guaranteed.",
};

export default function Products() {
  const products = [
    {
      id: "tshirts",
      icon: Shirt,
      title: "Custom T-Shirts",
      description:
        "Premium quality t-shirts with custom printing and embroidery services.",
      features: [
        "100% Cotton and Cotton Blends",
        "Screen Printing & Digital Printing",
        "Embroidery Services",
        "Sizes from XS to 5XL",
        "Bulk Order Discounts",
        "Fast Turnaround Times",
      ],
      applications: [
        "Corporate Uniforms",
        "Event Merchandise",
        "Team Apparel",
        "Promotional Giveaways",
      ],
      image: TShirt,
    },
    {
      id: "caps",
      icon: Crown,
      title: "Caps & Hats",
      description:
        "Professional caps and hats perfect for corporate branding and promotional campaigns.",
      features: [
        "Adjustable and Fitted Options",
        "Embroidered Logos",
        "Various Styles Available",
        "Durable Materials",
        "Custom Color Matching",
        "Structured and Unstructured",
      ],
      applications: [
        "Corporate Branding",
        "Sports Teams",
        "Promotional Events",
        "Retail Merchandise",
      ],
      image: Cap,
    },
    {
      id: "aprons",
      icon: ChefHat,
      title: "Custom Aprons",
      description: "High-quality aprons for restaurants, cafes, and promotional events.",
      features: [
        "Water and Stain Resistant",
        "Custom Printing Options",
        "Adjustable Neck and Waist Straps",
        "Professional Grade Materials",
        "Multiple Pocket Configurations",
        "Easy Care Instructions",
      ],
      applications: ["Restaurant Uniforms", "Cafe Branding", "Cooking Events", "Promotional Items"],
      image: Arpon,
    },
    {
      id: "jute-bags",
      icon: ShoppingBag,
      title: "Jute Bags",
      description: "Eco-friendly jute bags perfect for sustainable branding initiatives.",
      features: [
        "100% Natural Jute Material",
        "Biodegradable and Eco-Friendly",
        "Custom Screen Printing",
        "Reinforced Handles",
        "Various Sizes Available",
        "Bulk Pricing Options",
      ],
      applications: ["Eco-Friendly Branding", "Trade Shows", "Retail Packaging", "Corporate Gifts"],
      image: CustomJuteBag,
    },
    {
      id: "cotton-bags",
      icon: ShoppingBag,
      title: "Cotton Bags",
      description: "Versatile cotton bags for everyday use and promotional purposes.",
      features: [
        "100% Organic Cotton Options",
        "Reusable and Washable",
        "Custom Printing and Embroidery",
        "Long-Lasting Durability",
        "Multiple Handle Styles",
        "Gusset Bottom Options",
      ],
      applications: ["Shopping Bags", "Conference Swag", "Brand Promotion", "Gift Packaging"],
      image: CottonBag,
    },
    {
      id: "mouse-pads",
      icon: Mouse,
      title: "Mouse Pads",
      description: "Custom mouse pads for office branding and promotional giveaways.",
      features: [
        "High-Quality Rubber Base",
        "Smooth Fabric Surface",
        "Full-Color Printing",
        "Standard and Custom Sizes",
        "Non-Slip Bottom",
        "Fade-Resistant Inks",
      ],
      applications: ["Office Supplies", "Trade Show Giveaways", "Corporate Gifts", "Gaming Accessories"],
      image: MousePad,
    },
    {
      id: "mugs",
      icon: Coffee,
      title: "Custom Mugs",
      description: "Personalized mugs perfect for corporate gifts and promotional campaigns.",
      features: [
        "Ceramic and Stainless Steel Options",
        "Dishwasher and Microwave Safe",
        "Full-Color Printing",
        "Various Sizes Available",
        "Handle and Travel Mug Options",
        "Gift Box Packaging",
      ],
      applications: ["Corporate Gifts", "Employee Recognition", "Promotional Items", "Event Merchandise"],
      image: CustomMug,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of custom manufacturing services. From apparel to promotional items, we bring your brand to life.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Text Section */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">{product.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect For</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-cover rounded-r-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your custom manufacturing needs and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
