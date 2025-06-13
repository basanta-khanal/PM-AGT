"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({ hours: 0, pms: 0, features: 0, accuracy: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { label: "Hours Saved Weekly", value: 40, suffix: "+", color: "text-emerald-600" },
    { label: "Product Managers", value: 500, suffix: "+", color: "text-teal-600" },
    { label: "AI Features", value: 25, suffix: "+", color: "text-cyan-600" },
    { label: "Accuracy Rate", value: 95, suffix: "%", color: "text-emerald-600" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        setCounts((prev) => ({
          ...prev,
          [index === 0 ? "hours" : index === 1 ? "pms" : index === 2 ? "features" : "accuracy"]: Math.floor(current),
        }))
      }, 40)
    })
  }

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-r from-gray-900 via-college-blue-darker to-college-blue-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Trusted by Product Leaders Worldwide
          </h2>
          <p className="text-xl text-college-blue-lighter animate-fade-in-up animation-delay-300">
            Join the revolution that's transforming how products are built
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20">
                <div
                  className={`text-5xl md:text-6xl font-bold ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {index === 0
                    ? counts.hours
                    : index === 1
                      ? counts.pms
                      : index === 2
                        ? counts.features
                        : counts.accuracy}
                  {stat.suffix}
                </div>
                <div className="text-white/90 text-lg font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
