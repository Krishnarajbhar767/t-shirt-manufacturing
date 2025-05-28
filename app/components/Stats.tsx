export default function Stats() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "50K+", label: "Products Delivered" },
    { number: "24/7", label: "Customer Support" },
  ]

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
