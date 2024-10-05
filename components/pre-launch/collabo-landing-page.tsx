"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Plus, Star, Menu, X } from "lucide-react"

export function CollaboLandingPage() {
  const [count, setCount] = useState(0)
  const [showPlus, setShowPlus] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (showPlus) {
      const timer = setTimeout(() => setShowPlus(false), 500)
      return () => clearTimeout(timer)
    }
  }, [showPlus])

  const handleTap = () => {
    setCount(count + 1)
    setShowPlus(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-purple-100 font-sans">
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
              <button className="bg-purple-400 text-black px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300">
                SIGN UP
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "'auto'" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col items-center space-y-4">
                  <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">LOCATIONS</a>
                  <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">SUPPORT</a>
                  <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">ABOUT</a>
                  <a href="#how-it-works" className="text-black hover:text-purple-700 py-2 transition duration-300">HOW IT WORKS?</a>
                  <button className="bg-purple-400 text-black px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300 w-full max-w-xs mt-4">
                    SIGN UP
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <div className="relative overflow-hidden rounded-3xl my-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur-xl"></div>
          <div className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-12">
            <h1 className="text-4xl md:text-6xl font-black text-center leading-tight text-white">
              SHIP TOGETHER, SAVE INDIVIDUALLY :<br />WITH COLLABO
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 my-12">
          <div className="md:w-1/2">
            <motion.div 
              className="bg-purple-300 p-6 rounded-3xl h-full flex flex-col justify-between"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm inline-block mb-4">#1</div>
                <h3 className="text-2xl font-bold mt-2">Don&apos;t clear that cart because of the shipping fee: Collabo&apos;s</h3>
                <p className="font-bold text-xl mt-2">  You shop and spend then ship and save </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-2">Win</span>
                  <span className="text-4xl font-bold text-purple-500">Win</span>
                </div>
                <div className="mt-4">
                  <span className="text-6xl">😊</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div 
              className="bg-yellow-300 p-6 rounded-3xl h-full flex flex-col justify-between relative shadow-xl"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <motion.div
                  className="cursor-pointer mb-8"
                  whileTap={{ scale: 0.9 }}
                  onClick={handleTap}
                >
                  <ShoppingCart size={80} />
                  {showPlus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -10 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <Plus size={32} className="text-green-500" />
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  className="cursor-pointer bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 text-xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SIGN UP NOW
                </motion.div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  }}
                >
                  <svg width="64" height="64" viewBox="0 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 62C48.5685 62 48.5685 32C62 15.4315 2 32 2C15.4315 32C2 62Z" fill="white"/>
                    <path d="M32 42V22M32 22L22 32M32 22L42 32" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Why Choose CartSplit?</h2>
            <p className="text-xl mb-8">Experience the future of collaborative shopping with CartSplit&apos;s innovative platform.</p>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold">4.9</span>
                <Star className="text-yellow-400" size={40} fill="currentColor" />
              </div>
              <p className="mt-4 font-bold text-xl">#satisfied users worldwide</p>
              <div className="mt-4 flex space-x-2">
                <span className="text-4xl">😊</span>
                <span className="text-4xl">😊</span>
                <span className="text-4xl">😊</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <ul className="space-y-6">
              {[
                { icon: "💸", title: "Save on Delivery", description: "Split shipping costs with nearby users and maximize savings." },
                { icon: "👥", title: "Group Purchases", description: "Easily share cart items and costs with friends or new connections." },
                { icon: "🤝", title: "Connect with Locals ", description: "Match with others in your area for joint deliveries and savings." },
                { icon: "🔒", title: "Secure & Convenient", description: "Effortless, secure transactions and real-time updates on group orders." },
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section id="how-it-works" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎮", title: "Find Your Shopping Crew", description: "Add items to your cart, and CartSplit pairs you with others nearby who want to place an order on the same site." },
              { icon: "💰", title: "Split the Shipping", description: "We divide the shipping cost among everyone in the group, letting you pay less for delivery.The more people, the bigger the savings!" },
              { icon: "🚀", title: "Save", description: "Confirm your group order, and CartSplit handles payments and updates. Enjoy fast, affordable shipping while saving big with your team!." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10">Our Planned locations</h2>

        </section>

        <section id="Support" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10"> Want to be a beta tester? </h2>

        </section>

        <section className="my-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start?</h2>
          <button className="bg-purple-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-purple-600 transition duration-300 shadow-lg">
            Join Cartsplit Now
          </button>
        </section>
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