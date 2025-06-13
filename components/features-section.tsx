"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FileText,
  Users,
  BarChart3,
  TrendingUp,
  MessageSquare,
  Calendar,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [animateOnScroll, setAnimateOnScroll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const sectionRef = useRef<HTMLDivElement>(null)

  const categories = ["All", "Planning", "Analysis", "Execution", "Collaboration"]

  const features = [
    {
      icon: FileText,
      title: "Instant PRD Generation",
      description:
        "Create comprehensive Product Requirements Documents in minutes, not hours. AI analyzes your inputs and generates structured, detailed PRDs.",
      color: "from-college-blue to-college-blue-light",
      bgColor: "bg-college-gray",
      category: "Planning",
      details: [
        "AI-powered document generation based on simple inputs",
        "Customizable templates for different product types",
        "Automatic inclusion of user personas and journey maps",
        "Export to multiple formats including PDF, Word, and Confluence",
      ],
    },
    {
      icon: Users,
      title: "User Story Creation",
      description:
        "Transform requirements into actionable user stories with acceptance criteria. Perfect for agile teams and sprint planning.",
      color: "from-college-blue-light to-college-blue-lighter",
      bgColor: "bg-college-gray",
      category: "Planning",
      details: [
        "Automatic generation of user stories from requirements",
        "Built-in acceptance criteria suggestions",
        "Story point estimation assistance",
        "Integration with popular agile management tools",
      ],
    },
    {
      icon: BarChart3,
      title: "Smart Prioritization",
      description:
        "Use RICE, MoSCoW, and custom frameworks to prioritize features. AI considers impact, effort, and strategic alignment.",
      color: "from-college-blue-lighter to-college-blue",
      bgColor: "bg-college-gray",
      category: "Analysis",
      details: [
        "Multiple prioritization frameworks including RICE and MoSCoW",
        "AI-powered impact and effort estimation",
        "Visual prioritization matrices and charts",
        "Stakeholder feedback collection and integration",
      ],
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description:
        "Monitor competitors and market trends in real-time. Get insights on feature gaps and opportunities.",
      color: "from-college-blue to-college-blue-dark",
      bgColor: "bg-college-gray",
      category: "Analysis",
      details: [
        "Real-time competitor feature analysis",
        "Market trend identification and alerts",
        "Customer sentiment analysis across platforms",
        "Opportunity identification with AI recommendations",
      ],
    },
    {
      icon: MessageSquare,
      title: "Feedback Analysis",
      description:
        "Analyze user feedback from support tickets, reviews, and surveys. Extract actionable insights automatically.",
      color: "from-college-blue-dark to-college-blue-light",
      bgColor: "bg-college-gray",
      category: "Execution",
      details: [
        "Automatic sentiment analysis of customer feedback",
        "Theme clustering and pattern identification",
        "Priority recommendations based on feedback volume",
        "Integration with support systems and survey tools",
      ],
    },
    {
      icon: Calendar,
      title: "Roadmap Builder",
      description:
        "Generate visual roadmaps from strategy inputs. Keep stakeholders aligned with timeline and milestone tracking.",
      color: "from-college-blue-light to-college-blue",
      bgColor: "bg-college-gray",
      category: "Collaboration",
      details: [
        "Interactive visual roadmap creation and editing",
        "Multiple timeline views (monthly, quarterly, yearly)",
        "Milestone and dependency tracking",
        "Shareable links with customizable permissions",
      ],
    },
  ]

  const filteredFeatures =
    selectedCategory === "All" ? features : features.filter((feature) => feature.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateOnScroll(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const handleFeatureClick = (index: number) => {
    setActiveFeature(activeFeature === index ? null : index)
  }

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white to-college-gray/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-college-blue rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-college-blue rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={animateOnScroll ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything Product Managers
            <span className="bg-gradient-to-r from-college-blue to-college-blue-light bg-clip-text text-transparent ml-2">
              Need
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI agent handles the heavy lifting so you can focus on strategy and innovation. From ideation to
            execution, we've got you covered.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animateOnScroll ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-college-blue text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-college-gray shadow",
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animateOnScroll ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden",
                activeFeature === index ? "ring-2 ring-college-blue" : "",
              )}
              style={{
                transformOrigin: "center",
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleFeatureClick(index)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-gray-400 group-hover:text-college-blue transition-colors">
                    {activeFeature === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-college-blue transition-colors duration-300 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Expandable Content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 bg-gray-50 border-t border-gray-100",
                  activeFeature === index ? "max-h-80" : "max-h-0",
                )}
              >
                <div className="p-6">
                  <h4 className="font-semibold text-college-blue mb-4">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-college-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{feature.category}</span>
                      <button className="text-college-blue hover:text-college-blue-dark text-sm font-medium">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={animateOnScroll ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-lg rounded-full">
            <div className="flex space-x-2">
              {features.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i < features.length / 2 ? "bg-college-blue" : "bg-gray-300",
                  )}
                ></div>
              ))}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700">
              <span className="text-college-blue font-bold">
                {Math.round((features.length / 2 / features.length) * 100)}%
              </span>{" "}
              of PM tasks automated
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
