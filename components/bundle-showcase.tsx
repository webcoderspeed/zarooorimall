"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Layers, BookOpen, Palette, Video, Database, Code, Dumbbell } from "lucide-react"

export default function BundleShowcase() {
  const [activeTab, setActiveTab] = useState("software")

  return (
    <Tabs defaultValue="software" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <TabsTrigger value="software" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span>Software</span>
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Templates</span>
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Courses</span>
          </TabsTrigger>
          <TabsTrigger value="other" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            <span>Other</span>
          </TabsTrigger>
        </TabsList>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <TabsContent value="software" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareItems.map((item, index) => (
                <BundleItem key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templateItems.map((item, index) => (
                <BundleItem key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseItems.map((item, index) => (
                <BundleItem key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherItems.map((item, index) => (
                <BundleItem key={index} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  )
}

interface BundleItemProps {
  item: {
    title: string
    description: string
    icon: React.ReactNode
    image: string
  }
  index: number
}

function BundleItem({ item, index }: BundleItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full overflow-hidden border-2 hover:border-teal-500 transition-all hover:shadow-lg">
        <div className="relative h-40 w-full">
          <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const softwareItems = [
  {
    title: "Adobe Premium Software 2024",
    description: "Complete suite of Adobe Creative Cloud applications for professional design and content creation.",
    icon: <Palette className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "Digital Marketing Software & Tools",
    description: "Essential tools for SEO, social media management, email marketing, and analytics.",
    icon: <Code className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "AI Content Creation Tools",
    description: "Advanced AI-powered tools for generating high-quality content, images, and videos.",
    icon: <Package className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
]

const templateItems = [
  {
    title: "500+ AI Reels Bundle",
    description: "Professionally designed templates for creating engaging reels across different niches.",
    icon: <Video className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "Canva Template Collection",
    description: "Premium Canva templates for social media, presentations, and marketing materials.",
    icon: <Palette className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "Resume & CV Templates",
    description: "Professional resume templates to help you stand out in the job market.",
    icon: <Layers className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
]

const courseItems = [
  {
    title: "Instagram Growth Mastery Course",
    description: "Comprehensive course on growing your Instagram following and engagement organically.",
    icon: <BookOpen className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "Complete Digital Marketing Course",
    description: "Learn all aspects of digital marketing from basics to advanced strategies.",
    icon: <BookOpen className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "Freelancing & Work From Home Course",
    description: "Step-by-step guide to starting and growing your freelancing career.",
    icon: <BookOpen className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
]

const otherItems = [
  {
    title: "Pan India Database Bundle",
    description: "Comprehensive database of contacts and leads across various industries in India.",
    icon: <Database className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "ChatGPT Prompts Collection",
    description: "Curated collection of effective prompts for maximizing ChatGPT's potential.",
    icon: <Code className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
  {
    title: "Fitness Bundle",
    description: "Complete fitness resources including workout plans, nutrition guides, and tracking tools.",
    icon: <Dumbbell className="h-6 w-6" />,
    image: "/placeholder.svg?height=160&width=320",
  },
]
