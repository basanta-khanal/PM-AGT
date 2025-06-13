"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, CheckCircle, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function PartnersSection() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null)
  const [visibleTools, setVisibleTools] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const sectionRef = useRef<HTMLDivElement>(null)

  const categories = ["All", "Communication", "Project Management", "Email & Calendar", "Design & Docs"]

  const partners = [
    {
      name: "Jira",
      url: "https://www.atlassian.com/software/jira",
      icon: "🔷",
      description: "Issue & project tracking",
      category: "Project Management",
      status: "Available",
      color: "from-blue-500 to-blue-600",
      features: ["Sync user stories", "Auto-update tickets", "Sprint planning"],
    },
    {
      name: "Slack",
      url: "https://slack.com",
      icon: "💬",
      description: "Team communication",
      category: "Communication",
      status: "Available",
      color: "from-purple-500 to-purple-600",
      features: ["Real-time notifications", "Channel integration", "Bot commands"],
    },
    {
      name: "Microsoft Teams",
      url: "https://www.microsoft.com/en-us/microsoft-teams",
      icon: "👥",
      description: "Video conferencing & chat",
      category: "Communication",
      status: "Available",
      color: "from-indigo-500 to-indigo-600",
      features: ["Meeting integration", "File sharing", "Team collaboration"],
    },
    {
      name: "Gmail",
      url: "https://gmail.com",
      icon: "📧",
      description: "Email integration",
      category: "Email & Calendar",
      status: "Available",
      color: "from-red-500 to-red-600",
      features: ["Email automation", "Template sync", "Contact management"],
    },
    {
      name: "Outlook",
      url: "https://outlook.com",
      icon: "📅",
      description: "Calendar & email management",
      category: "Email & Calendar",
      status: "Available",
      color: "from-blue-600 to-blue-700",
      features: ["Calendar sync", "Meeting scheduling", "Email templates"],
    },
    {
      name: "Notion",
      url: "https://www.notion.so",
      icon: "📝",
      description: "Documentation & notes",
      category: "Design & Docs",
      status: "Available",
      color: "from-gray-600 to-gray-700",
      features: ["Doc generation", "Template sync", "Database integration"],
    },
    {
      name: "Linear",
      url: "https://linear.app",
      icon: "⚡",
      description: "Modern issue tracking",
      category: "Project Management",
      status: "Beta",
      color: "from-violet-500 to-violet-600",
      features: ["Issue sync", "Roadmap integration", "Sprint automation"],
    },
    {
      name: "Figma",
      url: "https://www.figma.com",
      icon: "🎨",
      description: "Design collaboration",
      category: "Design & Docs",
      status: "Coming Soon",
      color: "from-pink-500 to-pink-600",
      features: ["Design handoff", "Prototype sync", "Asset management"],
    },
  ]

  const filteredPartners =
    selectedCategory === "All" ? partners : partners.filter((partner) => partner.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newVisible = Array.from({ length: partners.length }, (_, i) => i)
            setVisibleTools(newVisible)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleToolClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Available
          </Badge>
        )
      case "Beta":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Zap className="w-3 h-3 mr-1" />
            Beta
          </Badge>
        )
      case "Coming Soon":
        return (
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            <Clock className="w-3 h-3 mr-1" />
            Coming Soon
          </Badge>
        )
      default:
        return null
    }
  }

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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-college-blue rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-college-blue rounded-full opacity-5 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visibleTools.length > 0 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Integrates with Your <span className="text-college-blue">Favorite Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Seamlessly connect with the tools you already use. One-click setup, real-time sync, and powerful automation.
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
              <span>8+ Integrations</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-yellow-500 mr-1" />
              <span>Real-time Sync</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 text-blue-500 mr-1" />
              <span>5-min Setup</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visibleTools.length > 0 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-college-blue text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-college-gray shadow border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={visibleTools.length > 0 ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredTool(index)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              <div
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-college-blue/30 cursor-pointer overflow-hidden ${
                  hoveredTool === index ? "scale-105 -translate-y-2" : ""
                }`}
                onClick={() => handleToolClick(partner.url)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">{getStatusBadge(partner.status)}</div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {partner.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-college-blue transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{partner.description}</p>

                  {/* Features List */}
                  <div
                    className={`space-y-1 transition-all duration-500 ${
                      hoveredTool === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {partner.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* External Link Icon */}
                  <div
                    className={`flex justify-end mt-4 transition-all duration-300 ${
                      hoveredTool === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 text-college-blue" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-college-blue/20 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visibleTools.length > 0 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see your tool? We're always adding more!</h3>
          <p className="text-gray-600 mb-6">
            Request a custom integration or explore our API for unlimited possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-college-blue hover:bg-college-blue-dark">
              Request Integration
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-college-blue text-college-blue hover:bg-college-blue/5">
              View API Docs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
