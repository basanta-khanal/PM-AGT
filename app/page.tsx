"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { DemoSection } from "@/components/demo-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ContactSection } from "@/components/contact-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" id="home">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        {/* Services Section - Using DemoSection as Services */}
        <section id="services">
          <DemoSection />
        </section>
        {/* Features Section - Using ComparisonSection as main Features */}
        <section id="features">
          <ComparisonSection />
        </section>
        <FeaturesSection />
        <TestimonialsSection />
        <PartnersSection />
        {/* Contacts Section */}
        <section id="contact">
          <ContactSection />
        </section>
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
