"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import React from "react"

export function ThankYou() {
  const [referralCode, setReferralCode] = useState("''")
  const [discountCode, setDiscountCode] = useState("''")

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })

    // Generate mock referral and discount codes
    setReferralCode("'FRIEND'" + Math.random().toString(36).substring(2, 7).toUpperCase())
    setDiscountCode("'SAVE'" + Math.random().toString(36).substring(2, 7).toUpperCase())
  }, [])

  return (
    <div className="min-h-screen bg-[#EFE7F7] flex items-center justify-center p-4">
      <motion.div
        className="fixed top-10 left-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="bg-yellow-400 p-4 rounded-full shadow-lg">
          <span className="font-bold text-2xl text-black">Collabo</span>
        </div>
      </motion.div>

      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-600">Thank You!</CardTitle>
          <CardDescription className="text-center">
            Your registration for Collabo beta is complete.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center">
            We&apos;re excited to have you on board. Here&apos;s your exclusive information:
          </p>
          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="font-semibold">Your Referral Code:</p>
            <p className="text-lg font-bold text-purple-600">{referralCode}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="font-semibold">Your Discount Code:</p>
            <p className="text-lg font-bold text-yellow-600">{discountCode}</p>
          </div>
          <p className="text-center">
            Join our community on Discord to stay updated and connect with other Collabo users!
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
              <Link href="https://discord.gg/r42HMyNUny" target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}