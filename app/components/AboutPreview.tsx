import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-6">
              <h1>
                <span className="text-blue-600 font-semibold text-lg">About T-Shirt Manufacturing</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Crafting Excellence Since 2014
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At TShirtFactory, we’re more than just manufacturers – we’re your creative collaborators in bringing your brand vision to life through premium custom apparel and promotional merchandise.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600">
                As a leading custom T-shirt manufacturer in Ahmedabad, we started as a small family-run unit and have now grown into a globally trusted brand, serving over 1,000 businesses worldwide. Our state-of-the-art facility merges traditional craftsmanship with the latest technology to ensure top-tier quality.
              </p>
              <p className="text-lg text-gray-600">
                Every product we create tells a story – your story. Whether it’s corporate uniforms that build strong team identity, promotional merchandise that enhances brand visibility, or customized apparel that makes a lasting impression – we deliver excellence with every stitch. No wonder we’re a preferred corporate uniform supplier in Ahmedabad and across India.
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

          {/* Responsive Image Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-60 md:h-72 lg:h-80">
                  <Image
                    src="/images/home/tshirtmanufacturingahmedabad(9).jpg"
                    alt="Manufacturing Process"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="relative w-full h-60 md:h-72 lg:h-80">
                  <Image
                    src="/images/home/tshirtmanufacturingahmedabad(10).webp"
                    alt="Quality Control"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:mt-8">
                <div className="relative w-full h-60 md:h-72 lg:h-80">
                  <Image
                    src="/images/home/tshirtmanufacturingahmedabad(12).jpg"
                    alt="Team at Work"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="relative w-full h-60 md:h-72 lg:h-80">
                  <Image
                    src="/images/home/tshirtmanufacturingahmedabad(13).jpg"
                    alt="Finished Products"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 p-4 rounded-full shadow-lg">
              <Award className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
