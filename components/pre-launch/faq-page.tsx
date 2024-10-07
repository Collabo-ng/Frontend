"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "../../components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import React from "react"

const categories = ["General", "Pricing", "Dashboard", "API"]

const faqItems = [
  {
    question: "Is this for me?",
    answer: "If you love shopping and want to save on delivery costs, then yes! Collabo is designed for savvy shoppers like you, helping you split delivery fees and connect with others who share the same passion.",
    icon: "😊"
  },
  {
    question: "Will this work for me?",
    answer: "If shopping is your passion, then Collabo will work for you! Our platform helps you team up with others to reduce costs and enjoy a seamless shopping experience.",
    icon: "🛍️"
  },
  {
    question: "How long will it take to work?'",
    answer: "Once your order is placed, you’ll be notified by our partners as soon as the delivery is confirmed. Delivery times depend on the platform and when the order is placed.",
    icon: "⏳"
  },
  {
    question: "What is required of me?'",
    answer: "All you need to do is share your cart—we handle the rest! No need to worry about exchange rates or payment methods. We generate a cart for the group, and you can pay in your local currency, USDT, or dollars.'",
    icon: "🛒"
  },
  {
    question: "Why now?",
    answer: "With rising delivery costs, there's no better time to start saving. Split fees with others and reduce your overall costs by sharing your cart and matching with the best delivery services.'",
    icon: "⏰"
  },
  {
    question: "How is this different from other products?",
    answer: "While other platforms focus on individual payments, Collabo pairs you with other shoppers, manages group orders, and tracks your delivery with our trusted partners, giving you a seamless and collaborative shopping experience.'",
    icon: "🔄"
  },
  {
    question: "What’s included?",
    answer: "Access to a variety of online markets, collaborative cart sharing, group payment options, and delivery tracking—all designed to help you save on delivery fees and shop together.",
    icon: "📦"
  },
  {
    question: "What if it does not work for me?",
    answer: "Give it a try! If it doesn't work for you, let us know, and we’ll help you explore other options. We're here to make your shopping experience better.",
    icon: "🤔"
  },
]
export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("'General'")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-purple-100 font-sans flex flex-col">
      <header className="container mx-auto p-4">
        <nav className="bg-white rounded-full shadow-lg p-4">
          <div className="flex justify-between items-center md:justify-start">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="flex items-center justify-center flex-grow md:flex-grow-0 md:justify-start">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <span className="font-bold text-black">Collabo</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 flex-grow justify-end">
              <a href="#" className="text-black hover:text-purple-700 transition duration-300">LOCATIONS</a>
              <a href="#" className="text-black hover:text-purple-700 transition duration-300">SUPPORT</a>
              <a href="#" className="text-black hover:text-purple-700 transition duration-300">ABOUT</a>
              <a href="#how-it-works" className="text-black hover:text-purple-700 transition duration-300">HOW IT WORKS?</a>
              <a href="#" className="text-black hover:text-purple-700 transition duration-300">FAQ</a>
              <button className="bg-purple-400 text-black px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300">
                <Link href="/register">
                Register
                </Link>
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col items-center space-y-4">
                  <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">LOCATIONS</a>
                  <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">SUPPORT</a>
                  <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">ABOUT</a>
                  <a href="/#how-it-works" className="text-black hover:text-purple-700 py-2 transition duration-300">HOW IT WORKS?</a>
                  <Link href="/register">
                  <button className="bg-purple-400 text-black px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300 w-full max-w-xs mt-4">
                    Register
                  </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently asked questions</h1>
        <p className="text-center text-gray-600 mb-8">
          These are the most commonly asked questions about Collabo.
          Can&apos;t find what you&apos;re looking for? <a href="#" className="text-purple-600 hover:underline">Chat to our friendly team!</a>
        </p>

        <div className="flex justify-center space-x-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <span>{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 ml-12">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Collabo</h3>
              <p>Revolutionizing Community shopping.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Developer</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Discord</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Collabo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}