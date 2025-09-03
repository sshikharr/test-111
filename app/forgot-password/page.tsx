'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add password reset logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-base font-medium">J</span>
            </div>
            <span className="text-xl font-semibold">Juristo</span>
          </Link>
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success ? (
          <div className="space-y-6">
            <Alert>
              <AlertDescription>
                Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
              </AlertDescription>
            </Alert>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setSuccess(false)}
            >
              Try again
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              Send reset link
            </Button>
          </form>
        )}

        <p className="text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link href="/login" className="text-[#4B6BFB] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

