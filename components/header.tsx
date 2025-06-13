"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const serviceItems = [
    "AI Agent Development",
    "Custom Web & Mobile App Development",
    "Agent Strategy & Consulting",
    "End-to-End Product Delivery",
    "Integration & Automation",
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="#"
                className="flex items-center hover:opacity-80 transition-opacity"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                <img src="/images/pts-logo.png" alt="Progress Tech Solutions" className="h-10 w-auto mr-3" />
                <h1 className="text-2xl font-bold" style={{ color: "#005FAF" }}>
                  Progress Tech Solutions
                </h1>
              </a>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${
                    isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {serviceItems.map((item, index) => (
                      <a
                        key={index}
                        href={`#services-${item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-[#005FAF] hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium">{item}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#features"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#005FAF] px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacts
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-[#005FAF] hover:bg-[#004080]">Book Demo</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#005FAF]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {/* Mobile Services Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900 border-b border-gray-200 flex items-center gap-2">
                  Services
                  <ChevronDown size={16} />
                </div>
                {serviceItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#services-${item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className="block px-6 py-2 text-sm text-gray-700 hover:text-[#005FAF] hover:bg-blue-50"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]">
                Features
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#005FAF]">
                Contacts
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#005FAF] hover:bg-[#004080]">Book Demo</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
