"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, Target, TrendingUp, Shield, Bot } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ComparisonSection() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const sections = [
    {
      icon: Zap,
      title: "All-in-One AI Copilot",
      subtitle: "Complete Product Management Suite",
      description:
        "Everything you need in one intelligent platform - from ideation to execution. No more switching between multiple tools.",
      image: "/images/team-collaboration-workspace.jpg",
      features: ["PRD Generation", "User Stories", "Roadmaps", "OKRs", "Market Intelligence"],
      stats: { value: "15+", label: "AI Features" },
      bgGradient: "from-[#005FAF]/10 to-[#005FAF]/5",
    },
    {
      icon: Bot,
      title: "AI Automation Agent",
      subtitle: "Intelligent Automation Platform",
      description:
        "Deploy intelligent automation agents that handle complex workflows, data processing, and decision-making tasks. Our AI agents learn from your processes and continuously optimize performance.",
      image: "/images/ai-automation-collaboration.jpg",
      features: [
        "Workflow Automation",
        "Smart Decision Making",
        "Process Optimization",
        "Real-time Learning",
        "Custom Agent Training",
      ],
      stats: { value: "24/7", label: "Automation" },
      bgGradient: "from-[#005FAF]/5 to-[#005FAF]/10",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      subtitle: "Data-Driven Decision Making",
      description: "AI-powered insights that help you make strategic product decisions with confidence and precision.",
      image: "/images/strategic-planning-teamwork.jpg",
      features: [
        "RICE Prioritization",
        "Market Analysis",
        "Competitor Tracking",
        "Trend Forecasting",
        "Risk Assessment",
      ],
      stats: { value: "95%", label: "Accuracy Rate" },
      bgGradient: "from-[#005FAF]/10 to-[#005FAF]/5",
    },
    {
      icon: TrendingUp,
      title: "10x Productivity Boost",
      subtitle: "Automate Repetitive Tasks",
      description:
        "Focus on strategy while AI handles the heavy lifting of documentation, analysis, and routine tasks.",
      image: "/images/productivity-analytics.jpg",
      features: ["40+ Hours Saved", "Instant Generation", "Smart Templates", "Auto-Analysis", "Quick Iterations"],
      stats: { value: "40+", label: "Hours Saved Weekly" },
      bgGradient: "from-[#005FAF]/5 to-[#005FAF]/10",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Quality",
      subtitle: "Reliable & Secure",
      description:
        "Built for enterprise teams with security, accuracy, and reliability at its core. Trust your most important decisions to our AI.",
      image: "/images/enterprise-quality-meeting.jpg",
      features: ["95% Accuracy", "Data Security", "Quality Assurance", "Continuous Learning", "Reliable Output"],
      stats: { value: "500+", label: "Teams Trust Us" },
      bgGradient: "from-[#005FAF]/10 to-[#005FAF]/5",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      // Calculate overall section progress
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)))
      setScrollProgress(progress)

      // Check visibility for each item
      const newVisibleSections: number[] = []
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const itemTop = rect.top
          const itemBottom = rect.bottom
          const itemHeight = rect.height

          // Item is visible if it's in the viewport with some threshold
          const threshold = windowHeight * 0.3
          const isVisible = itemTop < windowHeight - threshold && itemBottom > threshold

          // Add reveal/hide effect based on scroll direction and position
          const revealProgress = Math.max(0, Math.min(1, (windowHeight - itemTop) / (itemHeight + threshold)))

          if (isVisible && revealProgress > 0.1) {
            newVisibleSections.push(index)
          }
        }
      })

      setVisibleSections(newVisibleSections)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-20 w-64 h-64 bg-[#005FAF] rounded-full opacity-5 blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${scrollProgress * 100}px) scale(${1 + scrollProgress * 0.5})` }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#005FAF] rounded-full opacity-5 blur-3xl transition-transform duration-1000"
          style={{ transform: `translateY(${-scrollProgress * 150}px) scale(${1 + scrollProgress * 0.3})` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: visibleSections.length > 0 ? 1 : 0,
              transform: `translateY(${visibleSections.length > 0 ? 0 : 50}px)`,
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#005FAF] to-[#0080FF] bg-clip-text text-transparent">
                Progress Tech Solutions
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The only comprehensive AI platform that transforms how Product Managers work. Experience the difference.
            </p>
          </div>
        </div>

        {/* Sections with Scroll-based Reveal/Hide */}
        <div className="space-y-32">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`transition-all duration-1000 ease-out ${
                visibleSections.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div
                className={`rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${section.bgGradient} backdrop-blur-sm border border-[#005FAF]/10`}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch`}
                >
                  {/* Image Side */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div
                      className="h-full min-h-[400px] relative transition-transform duration-1000"
                      style={{
                        transform: visibleSections.includes(index)
                          ? "scale(1) rotate(0deg)"
                          : "scale(1.1) rotate(2deg)",
                      }}
                    >
                      <img
                        src={section.image || "/placeholder.svg"}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#005FAF]/20 to-transparent"></div>

                      {/* Floating Icon */}
                      <div
                        className="absolute top-6 right-6 w-16 h-16 bg-[#005FAF] rounded-2xl flex items-center justify-center shadow-xl transition-all duration-1000"
                        style={{
                          transform: visibleSections.includes(index)
                            ? "translateY(0) rotate(0deg)"
                            : "translateY(-20px) rotate(180deg)",
                          opacity: visibleSections.includes(index) ? 1 : 0,
                        }}
                      >
                        <section.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Stats Badge */}
                      <div
                        className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-1000"
                        style={{
                          transform: visibleSections.includes(index)
                            ? "translateY(0) scale(1)"
                            : "translateY(20px) scale(0.8)",
                          opacity: visibleSections.includes(index) ? 1 : 0,
                        }}
                      >
                        <div className="text-2xl font-bold text-[#005FAF]">{section.stats.value}</div>
                        <div className="text-sm text-gray-600">{section.stats.label}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Title */}
                      <div
                        className="transition-all duration-1000"
                        style={{
                          transform: visibleSections.includes(index)
                            ? "translateX(0)"
                            : `translateX(${index % 2 === 0 ? "-30px" : "30px"})`,
                          opacity: visibleSections.includes(index) ? 1 : 0,
                          transitionDelay: "200ms",
                        }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-[#005FAF] mb-2">{section.title}</h3>
                        <p className="text-xl text-gray-700 font-medium mb-4">{section.subtitle}</p>
                        <p className="text-lg text-gray-600 leading-relaxed">{section.description}</p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        {section.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3 transition-all duration-700"
                            style={{
                              transform: visibleSections.includes(index) ? "translateX(0)" : "translateX(-20px)",
                              opacity: visibleSections.includes(index) ? 1 : 0,
                              transitionDelay: `${400 + featureIndex * 100}ms`,
                            }}
                          >
                            <div className="w-6 h-6 bg-[#005FAF] rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div
                        className="pt-4 transition-all duration-1000"
                        style={{
                          transform: visibleSections.includes(index)
                            ? "translateY(0) scale(1)"
                            : "translateY(20px) scale(0.9)",
                          opacity: visibleSections.includes(index) ? 1 : 0,
                          transitionDelay: "800ms",
                        }}
                      >
                        <Button
                          size="lg"
                          className="bg-[#005FAF] hover:bg-[#004080] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                          Explore Feature
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col space-y-3">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  visibleSections.includes(index) ? "bg-[#005FAF] scale-125 shadow-lg" : "bg-gray-300 scale-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-[#005FAF] transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
