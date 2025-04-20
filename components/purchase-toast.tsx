"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

const indianNames = [
  "Aarav Sharma",
  "Aditi Patel",
  "Arjun Singh",
  "Ananya Gupta",
  "Aryan Verma",
  "Diya Reddy",
  "Ishaan Kumar",
  "Kavya Joshi",
  "Rohan Mehta",
  "Riya Agarwal",
  "Vihaan Malhotra",
  "Anika Desai",
  "Dhruv Choudhury",
  "Tanvi Kapoor",
  "Kabir Khanna",
  "Saanvi Mishra",
  "Reyansh Rao",
  "Amaira Nair",
  "Vivaan Iyer",
  "Anvi Banerjee",
  "Advait Chauhan",
  "Myra Saxena",
  "Atharv Bose",
  "Pari Mehra",
  "Aarush Jain",
  "Aadhya Tiwari",
  "Arnav Bhat",
  "Avni Chakraborty",
  "Rudra Yadav",
  "Kyra Hegde",
  "Sarthak Trivedi",
  "Kiara Menon",
  "Aniket Pandey",
  "Trisha Shetty",
  "Shaurya Malik",
  "Navya Pillai",
  "Yuvan Rathore",
  "Anushka Goel",
  "Krish Venkatesh",
  "Shanaya Kaur",
  "Ayaan Mukherjee",
  "Ira Singhania",
  "Aaryan Bajaj",
  "Aanya Ahuja",
  "Veer Chawla",
  "Ishita Lal",
  "Shivay Bhatt",
  "Prisha Mathur",
  "Ayush Nayar",
  "Ahana Sengupta",
  "Madhav Thakur",
  "Pihu Chopra",
  "Rishaan Dutta",
  "Siya Rajput",
  "Pranav Lobo",
  "Disha Mistry",
  "Viraj Bhardwaj",
  "Aarna Srivastava",
  "Kabir Mahajan",
  "Saisha Gill",
  "Aadit Khare",
  "Myra Prakash",
  "Reyansh Khatri",
  "Vanya Basu",
  "Aarush Chandra",
  "Anika Kashyap",
  "Vivaan Mani",
  "Anvi Tandon",
  "Dhruv Varma",
  "Pari Naidu",
  "Ishaan Mittal",
  "Riya Bhatnagar",
  "Aryan Suri",
  "Ananya Balakrishnan",
  "Vihaan Chhabra",
  "Saanvi Dayal",
  "Aarav Kohli",
  "Aditi Arora",
  "Arjun Ranganathan",
  "Kavya Wadhwa",
  "Rohan Ramaswamy",
  "Diya Madan",
  "Atharv Walia",
  "Amaira Bedi",
  "Rudra Anand",
  "Kyra Cherian",
  "Sarthak Deshpande",
  "Kiara Sundaram",
  "Aniket Parekh",
  "Trisha Rajan",
  "Shaurya Nambiar",
  "Navya Krishnan",
  "Yuvan Swaminathan",
  "Anushka Goswami",
  "Krish Mani",
]

export default function PurchaseToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentName, setCurrentName] = useState("")

  useEffect(() => {
    // Function to show toast with random name
    const showRandomPurchase = () => {
      const randomName = indianNames[Math.floor(Math.random() * indianNames.length)]
      setCurrentName(randomName)
      setIsVisible(true)

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }

    // Show first toast after 3 seconds
    const initialTimeout = setTimeout(showRandomPurchase, 3000)

    // Then show toasts periodically
    const interval = setInterval(showRandomPurchase, 15000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-3 border-l-4 border-teal-500 max-w-xs"
          >
            <div className="bg-teal-100 rounded-full p-1">
              <Check className="h-5 w-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{currentName}</p>
              <p className="text-xs text-gray-500">just purchased this bundle</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
