import PricingSection from '@/components/pricing-section'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          Choose the perfect plan for your needs. All plans include our core features with additional benefits as you scale.
        </p>
      </div>
      <PricingSection />
    </div>
  )
}

