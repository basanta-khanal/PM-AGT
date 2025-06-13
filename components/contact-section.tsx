"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const benefits = [
    {
      icon: Clock,
      title: "Save 40+ Hours Weekly",
      description: "Automate repetitive PM tasks",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "10x Faster Delivery",
      description: "Ship products faster than ever",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Align stakeholders effortlessly",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "Secure, scalable, reliable",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const steps = ["Join Waitlist", "Schedule Demo", "Get Early Access", "Transform Workflow"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-college-blue/5 via-white to-college-blue/10 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-college-blue rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-college-blue rounded-full opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-college-blue rounded-full opacity-5 blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-college-blue rounded-full text-sm font-medium mb-6 shadow-lg border border-college-blue/20">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Transform Your Workflow Today
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform Your <span className="text-college-blue">PM Workflow</span>?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join the waitlist or book a demo to see how our AI agent can 10x your productivity and revolutionize how you
            build products.
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-500 ${
                    index <= activeStep ? "bg-college-blue text-white scale-110" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-1 mx-2 transition-all duration-500 ${
                      index < activeStep ? "bg-college-blue" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 font-medium">
            Step {activeStep + 1}: {steps[activeStep]}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-gray-900 flex items-center justify-center">
                  <Zap className="w-6 h-6 mr-2 text-college-blue" />
                  Get Started Today
                </CardTitle>
                <p className="text-gray-600">Join 500+ Product Managers already transforming their workflow</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-college-blue focus:ring-college-blue/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-college-blue focus:ring-college-blue/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700 font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-college-blue focus:ring-college-blue/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-700 font-medium">
                    Role
                  </Label>
                  <Input
                    id="role"
                    placeholder="Product Manager, Founder, etc."
                    value={formData.role}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-college-blue focus:ring-college-blue/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Tell us about your PM challenges
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="What takes up most of your time? What would you like to automate?"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-college-blue focus:ring-college-blue/20"
                  />
                </div>
                <Button className="w-full bg-college-blue hover:bg-college-blue-dark text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Form Progress */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Form Completion</span>
                    <span>{Math.round((Object.values(formData).filter((v) => v.length > 0).length / 5) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-college-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(Object.values(formData).filter((v) => v.length > 0).length / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Demo Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-college-blue to-college-blue-dark text-white overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 mr-4 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Book a Demo</h3>
                      <p className="text-white text-base font-medium">30-minute personalized walkthrough</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">30</div>
                      <div className="text-sm text-white font-medium">Minutes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">1:1</div>
                      <div className="text-sm text-white font-medium">Personal</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Free</div>
                      <div className="text-sm text-white font-medium">No Cost</div>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-college-blue hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Demo Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg hover:bg-college-blue/5 transition-colors">
                    <Mail className="w-5 h-5 text-college-blue mr-3" />
                    <span className="text-gray-700">Contact@progresstechsolutions.com</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-college-blue/5 transition-colors">
                    <Phone className="w-5 h-5 text-college-blue mr-3" />
                    <span className="text-gray-700">(800) 889-8394</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg hover:bg-college-blue/5 transition-colors">
                    <MapPin className="w-5 h-5 text-college-blue mr-3" />
                    <span className="text-gray-700">3913 Tunstall Dr, Frisco, TX</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="font-semibold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  What happens next?
                </h4>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We'll review your submission within 24 hours", time: "< 24h" },
                    { step: "2", text: "Schedule a personalized demo call", time: "30 min" },
                    { step: "3", text: "Get early access to our AI agent", time: "Instant" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 rounded-lg hover:bg-college-blue/5 transition-colors"
                    >
                      <Badge className="bg-college-blue text-white mr-3 mt-0.5">{item.step}</Badge>
                      <div className="flex-1">
                        <span className="text-gray-700">{item.text}</span>
                        <div className="text-xs text-gray-500 mt-1">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join 500+ Product Managers Already Transforming Their Workflow
            </h3>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                No Credit Card Required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                Free 30-Day Trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
