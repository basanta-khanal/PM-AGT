"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Target, Play, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["PRDs", "User Stories", "Roadmaps", "OKRs", "Insights"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#005FAF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#005FAF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#005FAF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-[#005FAF] rounded-full text-sm font-medium mb-6 shadow-lg border border-[#005FAF]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Product Management Revolution
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Generate{" "}
              <span className="relative inline-block">
                <span className="text-[#005FAF] animate-text-slide">{words[currentWord]}</span>
                <div className="absolute -inset-1 bg-[#005FAF] rounded-lg blur opacity-25 animate-pulse"></div>
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#005FAF] to-[#0080FF] bg-clip-text text-transparent animate-gradient">
                10x Faster
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              The only AI agent Product Managers need. Transform ideas into comprehensive PRDs, user stories, and
              roadmaps in minutes, not weeks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <Link href="/interactive-demo" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 rounded-full border-2 border-[#005FAF] text-[#005FAF] hover:bg-[#005FAF]/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                Try Interactive Demo
              </Button>
            </Link>
            <Button
              size="lg"
              className="group bg-[#005FAF] hover:bg-[#004080] text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-3 w-6 h-6 group-hover:animate-pulse" />
              Watch Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Animated Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-900">
            {[
              {
                icon: Clock,
                title: "Save 40+ Hours/Week",
                desc: "Automate repetitive PM tasks",
              },
              {
                icon: Target,
                title: "Strategic Insights",
                desc: "AI-powered market intelligence",
              },
              {
                icon: Zap,
                title: "All-in-One Platform",
                desc: "Everything in one intelligent copilot",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#005FAF] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-[#005FAF] flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#005FAF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#005FAF] rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-[#005FAF] rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#005FAF] rounded-full animate-float animation-delay-2000"></div>
    </section>
  )
}
