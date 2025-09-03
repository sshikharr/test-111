import { Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import PricingSection from '@/components/pricing-section'
import FeaturesSection from '@/components/features-section'
import DocsPreview from '@/components/docs-preview'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-5xl sm:text-7xl lg:text-[120px] font-bold text-center mb-6 sm:mb-8 leading-none">
          <span className="bg-gradient-to-r from-blue-100 to-blue-50 bg-clip-text text-transparent">
            SUPPORT
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:-mt-8">
          How can we help you get the most out of Juristo?
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search guides, FAQs, and tutorials..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <Link href="/docs" className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-white rounded-xl transform rotate-[-2deg] transition-transform group-hover:rotate-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-white rounded-xl transform rotate-[2deg] transition-transform group-hover:rotate-0"></div>
          <div className="relative p-6 bg-white rounded-xl border border-gray-100">
            <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-600">Documentation</h3>
            <p className="text-sm text-gray-600">
              Explore step-by-step guides, tutorials, and best practices to build faster with Juristo.
            </p>
          </div>
        </Link>

        <Link href="/docs/api" className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-white rounded-xl transform rotate-[-2deg] transition-transform group-hover:rotate-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-white rounded-xl transform rotate-[2deg] transition-transform group-hover:rotate-0"></div>
          <div className="relative p-6 bg-white rounded-xl border border-gray-100">
            <div className="w-12 h-12 mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-blue-600">API</h3>
            <p className="text-sm text-gray-600">
              Learn how to integrate Juristo’s API for automation, integrations, and custom workflows.
            </p>
          </div>
        </Link>

        <Link href="/features" className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-teal-50 to-white rounded-xl transform rotate-[-2deg] transition-transform group-hover:rotate-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-teal-50 to-white rounded-xl transform rotate-[2deg] transition-transform group-hover:rotate-0"></div>
          <div className="relative p-6 bg-white rounded-xl border border-gray-100">
            <div className="w-12 h-12 mb-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-teal-600">White Labelling</h3>
            <p className="text-sm text-gray-600">
              Customize Juristo with your branding and deliver a seamless experience to your clients.
            </p>
          </div>
        </Link>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Documentation Preview Section */}
      <DocsPreview />

      {/* Pricing Section */}
      <PricingSection />
    </div>
  )
}
