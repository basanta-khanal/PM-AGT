"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ArrowRight, Sparkles, Zap, Target, Clock } from "lucide-react"
import { useState, useEffect } from "react"

export function DemoSection() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const demoSteps = [
    {
      title: "Input Your Idea",
      description: "Simply describe your product concept",
      example: "Build a task management app for remote teams",
      icon: Sparkles,
      color: "from-college-blue-light to-college-blue",
    },
    {
      title: "AI Analysis",
      description: "Our AI analyzes market trends and user needs",
      example: "Analyzing 10,000+ similar products and user feedback",
      icon: Zap,
      color: "from-college-blue to-college-blue-light",
    },
    {
      title: "Generate PRD",
      description: "Complete PRD with personas and requirements",
      example: "15-page comprehensive PRD generated",
      icon: Target,
      color: "from-college-blue-light to-college-blue",
    },
    {
      title: "Create Roadmap",
      description: "6-month roadmap with milestones and priorities",
      example: "25+ user stories with acceptance criteria",
      icon: Clock,
      color: "from-college-blue to-college-blue-light",
    },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, demoSteps.length])

  const startDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)
  }

  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-br from-gray-900 via-college-blue-darker to-college-blue-dark relative overflow-hidden animate-on-scroll"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-college-blue-light/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-college-blue/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See the Magic in Action</h2>
          <p className="text-xl text-college-blue-100 max-w-3xl mx-auto leading-relaxed">
            Watch how our AI agent transforms a simple product idea into a complete PRD, user stories, and roadmap in
            under 5 minutes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Demo Card */}
          <Card className="border-0 shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in-up animation-delay-300">
            <div className="relative bg-gradient-to-br from-college-blue to-college-blue-light p-8 text-white">
              <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                  <h3 className="text-3xl font-bold mb-3">Interactive AI Demo</h3>
                  <p className="text-college-blue-100 text-lg">Experience the power of AI-driven product management</p>
                </div>
                <Button
                  size="lg"
                  onClick={startDemo}
                  className="group bg-white text-college-blue hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  {isPlaying ? "Demo Running..." : "Start Demo"}
                </Button>
              </div>

              {/* Demo Steps Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative p-6 rounded-2xl transition-all duration-500 ${
                      currentStep === index && isPlaying
                        ? "bg-white/20 scale-105 shadow-xl"
                        : "bg-white/10 hover:bg-white/15"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${
                        currentStep === index && isPlaying ? "animate-pulse" : ""
                      }`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-college-blue-100 text-sm mb-3">{step.description}</p>
                    <div className="text-xs text-college-blue-200 italic">"{step.example}"</div>

                    {/* Progress Indicator */}
                    {currentStep === index && isPlaying && (
                      <div className="absolute bottom-2 left-6 right-6">
                        <div className="w-full bg-white/20 rounded-full h-1">
                          <div className="bg-white h-1 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="bg-white/20 rounded-full h-2 mb-6">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isPlaying ? `${((currentStep + 1) / demoSteps.length) * 100}%` : "0%" }}
                ></div>
              </div>

              {/* Demo Results */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Demo Results:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-college-blue-200">2.5 min</div>
                    <div className="text-college-blue-100 text-sm">Time to Complete</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-college-blue-light">15 pages</div>
                    <div className="text-college-blue-100 text-sm">PRD Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-college-blue">25+ stories</div>
                    <div className="text-college-blue-100 text-sm">User Stories Created</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-college-blue to-college-blue-light hover:from-college-blue-darker hover:to-college-blue-dark text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Book Personalized Demo
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-college-blue shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Try Free Version
              </Button>
            </div>
            <p className="text-college-blue-100 mt-6 text-lg">
              Schedule a 30-minute demo with your own product ideas • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
