"use client"

import React from "react"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { UserCircle, Building2 } from "lucide-react"

export function LoginPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 relative">
      {/* Sign In button */}
      <Link href="sign-up" passHref>
      <div className="absolute top-4 right-4">
        <Button variant="ghost" className="text-purple-600 hover:text-purple-800 transition-colors">
          Sign up <span className="ml-1">→</span>
        </Button>
      </div>
      </Link>

      {/* Main content */}
      <div className="w-full max-w-md space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg animate-float">
            <span className="text-white text-3xl font-bold">C</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
          Start <span className="text-purple-600">Saving</span><br />
          <span className="text-gray-900">while</span> <span className="text-purple-600">Shopping.</span>
        </h1>

        {/* Login options */}
        <div className="space-y-4 mt-8">
          <Link href="login/agent-login" passHref>
            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-full transition-colors flex items-center justify-center">
              <Building2 className="w-5 h-5 mr-2" />
              Login as an Agent
            </Button>
          </Link>
          <Link href="login/user-login" passHref>
            <Button variant="outline" className="w-full bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-full transition-colors flex items-center justify-center">
              <UserCircle className="w-5 h-5 mr-2" />
              Login as a User
            </Button>
          </Link>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-sm text-gray-600 mt-8">
          By signing up, you agree to our{" "}
          <a href="#" className="text-purple-600 hover:underline">Terms</a> &{" "}
          <a href="#" className="text-purple-600 hover:underline">Privacy</a>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-1/4 -left-16 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
      <div className="fixed bottom-1/4 -right-16 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
    </div>
  )
}