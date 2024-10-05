"'use client'"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  country: z.string().min(1, {
    message: "Please select your country.",
  }),
  region: z.string().min(1, {
    message: "Please enter your region or state.",
  }),
  shoppingPlatforms: z.array(z.string()).min(1, {
    message: "Please select at least one shopping platform.",
  }),
  referralCode: z.string().optional(),
  desiredFeatures: z.string().max(500, {
    message: "Desired features must not exceed 500 characters.",
  }).optional(),
})

const shoppingPlatforms = [
  { id: "amazon", label: "Amazon" },
  { id: "ebay", label: "eBay" },
  { id: "etsy", label: "Etsy" },
  { id: "walmart", label: "Walmart" },
  { id: "other", label: "Other" },
]

async function registerBetaUser(data: z.infer<typeof formSchema>) {
  // This is a mock server action. In a real application, you would send this data to your server.
  await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network request
  console.log("'Beta user registered:'", data)
  return { success: true }
}

export function BetaRegister() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      country: "",
      region: "",
      shoppingPlatforms: [],
      referralCode: "",
      desiredFeatures: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await registerBetaUser(values)
      if (result.success) {
        toast({
          title: "Registration Successful",
          description: "Thank you for registering the CartSplit beta!",
        })
        router.push("'/thank-you'")
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error registering for the beta. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">Register for CartSplit Beta</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-600">Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} className="border-purple-300 focus:border-purple-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-600">Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-purple-300 focus:border-purple-500">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-600">Region/State</FormLabel>
                <FormControl>
                  <Input placeholder="Your region or state" {...field} className="border-purple-300 focus:border-purple-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shoppingPlatforms"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-purple-600">Shopping Platforms</FormLabel>
                  <FormDescription>
                    Select the platforms you use for online shopping.
                  </FormDescription>
                </div>
                {shoppingPlatforms.map((platform) => (
                  <FormItem key={platform.id} className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value.includes(platform.id)}
                        onCheckedChange={(checked) => {
                          const updatedValue = checked
                            ? [...field.value, platform.id]
                            : field.value.filter((value) => value !== platform.id);
                          field.onChange(updatedValue);
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {platform.label}
                    </FormLabel>
                  </FormItem>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="referralCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-600">Referral Code (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter referral code if you have one" {...field} className="border-purple-300 focus:border-purple-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desiredFeatures"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-purple-600">Desired Features</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what features you'd like to see in CartSplit!"
                    className="resize-none border-purple-300 focus:border-purple-500"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Max 500 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "SIGN UP NOW"}
          </Button>
        </form>
      </Form>
    </div>
  )
}