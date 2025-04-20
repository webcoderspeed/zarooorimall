"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Clock, Download, Shield, Zap } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import BundleShowcase from "@/components/bundle-showcase"
import ParallaxSection from "@/components/parallax-section"
import HeroAnimation from "@/components/hero-animation"
import StarRating from "@/components/star-rating"
import PurchaseToast from "@/components/purchase-toast"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex min-h-screen flex-col items-center">
      <PurchaseToast />

      {/* Hero Section */}
      <section
        ref={ref}
        className="w-full relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-blue-800 to-indigo-900"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <HeroAnimation />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center gap-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <Badge className="mb-4 bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 text-sm">
                Limited Time Offer - 90% OFF
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4">
                ZarooriMall
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-6">Shopping Bhi, Growth Bhi</p>
              <p className="max-w-[600px] text-blue-100 mb-8">
                Unlock your digital growth potential with our comprehensive bundle of premium digital assets, courses,
                templates, and tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open("https://example.com/buy", "_blank")}
                  >
                    अभी खरीदें - सिर्फ ₹199 <ArrowRight className="ml-2" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-2 text-white"
                >
                  <Clock className="h-5 w-5 text-yellow-300" />
                  <span>Offer ends in:</span>
                  <CountdownTimer hours={12} />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-center gap-2 mt-4 text-yellow-300"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Instant Digital Delivery</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Digital Assets Bundle"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <Badge className="self-start mb-2 bg-teal-500 text-white">Premium Bundle</Badge>
                  <h3 className="text-2xl font-bold text-white">Ultimate Digital Growth Pack</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <StarRating rating={4.9} />
                    <span className="text-white text-sm">(250+ reviews)</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-sm text-gray-500 line-through">₹2,000</p>
                  <p className="text-2xl font-bold text-teal-600">₹199</p>
                  <p className="text-xs text-red-500 font-medium">90% OFF</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Our Digital Bundle?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to accelerate your digital growth journey in one comprehensive package
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Download className="h-10 w-10 text-teal-500" />}
              title="Instant Access"
              description="Get immediate access to all digital assets after purchase. No waiting, start using right away."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-blue-500" />}
              title="Boost Your Growth"
              description="Accelerate your digital presence with premium tools, templates, and courses designed for success."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-indigo-500" />}
              title="Premium Quality"
              description="All assets are professionally designed and created to the highest standards in the industry."
            />
          </div>
        </div>
      </section>

      {/* Bundle Showcase */}
      <ParallaxSection>
        <div className="container px-4 md:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ultimate Digital Growth Bundle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to accelerate your digital growth journey in one comprehensive package
            </p>
          </motion.div>

          <BundleShowcase />

          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("https://example.com/buy", "_blank")}
              >
                अभी खरीदें - सिर्फ ₹199 <ArrowRight className="ml-2" />
              </Button>
              <p className="mt-4 text-gray-500 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Limited time offer - Hurry!</span>
              </p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials */}
      <section className="w-full py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our digital bundle has transformed careers and businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-teal-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500">
                        <Image
                          src={`/placeholder.svg?height=64&width=64`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <div className="mt-1">
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss This Opportunity!</h2>
            <p className="text-xl mb-8">Get access to our complete digital growth bundle at 90% OFF today.</p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span>Offer ends in:</span>
                <CountdownTimer hours={12} />
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("https://example.com/buy", "_blank")}
              >
                अभी खरीदें - सिर्फ ₹199 <ArrowRight className="ml-2" />
              </Button>

              <p className="text-sm text-blue-200 mt-4">
                Instant digital delivery. Start growing your digital presence today!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">ZarooriMall</h3>
              <p className="text-sm">Shopping Bhi, Growth Bhi</p>
            </div>

            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} ZarooriMall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-teal-500 transition-all"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Digital Marketer",
    rating: 5,
    text: "This bundle completely transformed my digital marketing strategy. The templates and courses helped me grow my client's Instagram following by 300% in just 2 months!",
  },
  {
    name: "Priya Patel",
    role: "Content Creator",
    rating: 4.5,
    text: "The AI Reels Bundle saved me countless hours of work. I'm now able to create engaging content in minutes instead of hours. Highly recommended!",
  },
  {
    name: "Amit Kumar",
    role: "Freelancer",
    rating: 5,
    text: "The freelancing course and templates helped me land my first 5 clients within weeks. This bundle is worth much more than what I paid for it.",
  },
]
