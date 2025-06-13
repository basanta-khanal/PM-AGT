"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Product Manager",
      company: "TechFlow Inc.",
      content:
        "Project Tech Solutions cut our PRD creation time from 2 weeks to 2 hours. The AI understands context better than any tool I've used. It's like having a senior PM as your copilot.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-college-blue to-college-blue-light",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "StartupLab",
      content:
        "As a founder wearing the PM hat, this tool is a game-changer. I can now compete with teams 10x my size in terms of product planning. The market intelligence feature alone is worth the investment.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-college-blue-light to-college-blue-lighter",
    },
    {
      name: "Emily Watson",
      role: "VP of Product",
      company: "Enterprise Solutions",
      content:
        "The market intelligence feature alone saved us from building a feature that would have failed. ROI was immediate. Our team productivity increased by 300% in the first month.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-college-blue-lighter to-college-blue",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "FinTech Pro",
      content:
        "User feedback analysis is incredible. It surfaces insights from thousands of support tickets that we would have missed. The AI prioritization framework is spot-on every time.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-college-blue to-college-blue-dark",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-college-gray to-white animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Trusted by Product Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of Product Managers who are shipping faster and building better products with AI.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden rounded-3xl">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="flex flex-col items-center text-center">
                  <Quote className="w-12 h-12 text-emerald-600 mb-6 opacity-50" />

                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium animate-fade-in">
                    "{testimonials[currentSlide].content}"
                  </blockquote>

                  <div className="flex items-center animate-fade-in-up">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[currentSlide].color} p-1 mr-6`}
                    >
                      <img
                        src={testimonials[currentSlide].avatar || "/placeholder.svg"}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-xl text-gray-900">{testimonials[currentSlide].name}</div>
                      <div className="text-gray-600 text-lg">{testimonials[currentSlide].role}</div>
                      <div className="text-college-blue font-semibold">{testimonials[currentSlide].company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={prevSlide}
              className="rounded-full w-14 h-14 border-college-blue text-college-blue hover:bg-college-gray shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-college-blue scale-125" : "bg-gray-300 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextSlide}
              className="rounded-full w-14 h-14 border-college-blue text-college-blue hover:bg-college-gray shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Thumbnail Preview */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`flex-shrink-0 p-4 rounded-xl transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-emerald-100 scale-105 shadow-lg"
                    : "bg-white hover:bg-gray-50 hover:scale-105"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-sm text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
