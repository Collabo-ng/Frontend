"use client"

import { useState } from "react"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Globe, Eye, EyeOff } from "lucide-react"
import React from "react"

export function LoginPageComponent() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-700">Collabo</div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="icon" className="text-purple-700">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="text-purple-700 hidden sm:inline-flex">Sign up</Button>
          <Button variant="default" className="bg-purple-600 text-white hover:bg-purple-700">Agent Login</Button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-purple-800">User Login</h2>
          <p className="text-center text-gray-600 mb-6">Welcome back! Please enter your details to access your account</p>
          
          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-purple-700">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password" className="text-purple-700">Password</Label>
              <div className="relative mt-1">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
              Sign in
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="h-5 w-5 mr-2" viewBox="0 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 7.7 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="h-5 w-5 mr-2" viewBox="0 24">
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 12z"
                    fill="#1877F2"
                  />
                </svg>
                Facebook
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="h-5 w-5 mr-2" viewBox="0 24">
                  <path
                    d="M12 2C6.477 2 6.477 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 12c0-5.523-4.477-10-10-10z"
                    fill="#000000"
                  />
                </svg>
                Apple
              </Button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Not a member?{""}
            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </main>

      <footer className="container mx-auto p-4 text-center text-sm text-gray-600">
        <p>Copyright © Collabo 2024 | <a href="#" className="hover:underline">Privacy Policy</a></p>
      </footer>
    </div>
  )
}