'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Basic',
      price: billingPeriod === 'monthly' ? 0 : 0,
      benefits: ["Basic support", "Limited access", "Essential tools"]
    },
    {
      name: 'Super',
      price: billingPeriod === 'monthly' ? 199 : 199,
      benefits: ["Priority support", "Extended access", "Advanced analytics"]
    },
    {
      name: 'Advance',
      price: billingPeriod === 'monthly' ? 399 : 399,
      benefits: ["24/7 support", "Full access", "Custom integrations"]
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Choose the Perfect Plan for Your Legal Needs
          </h2>
          <p className="text-gray-600 mb-8">
            Flexible pricing designed to fit businesses and individuals alike
          </p>
          <div className="inline-flex items-center rounded-full border p-1 bg-white">
            <Button
              variant={billingPeriod === 'monthly' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full"
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </Button>
            <Button
              variant={billingPeriod === 'yearly' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full"
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 ${
                index === 2 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">₹{plan.price}</span>
                  <span className="text-sm text-gray-400">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className={`h-5 w-5 ${index === 2 ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={index === 2 ? 'text-gray-300' : 'text-gray-600'}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  index === 2 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                Choose plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
