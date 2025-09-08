'use client'
import { Search, ArrowRight, Sparkles, Shield, Zap, Users, BookOpen, MessageSquare, Calendar, Video, Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function EnhancedHome() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Legal Assistant",
      description: "Get instant answers to legal questions with our advanced AI that understands context and provides accurate, reliable responses.",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-100 via-blue-50 to-white"
    },
    {
      icon: BookOpen,
      title: "Smart Document Automation",
      description: "Generate contracts, agreements, and legal documents automatically with intelligent templates and real-time data integration.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-100 via-cyan-50 to-white"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay compliant with automated monitoring, alerts, and updates for regulatory changes in your jurisdiction.",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-100 via-teal-50 to-white"
    },
    {
      icon: Calendar,
      title: "Case Tracking & Management",
      description: "Track case progress, deadlines, and client communications in one centralized, secure platform.",
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-100 via-green-50 to-white"
    },
    {
      icon: Video,
      title: "Client Portal Integration",
      description: "Provide clients with 24/7 access to case updates, documents, and direct communication channels.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-100 via-emerald-50 to-white"
    },
    {
      icon: Zap,
      title: "White-Label Solutions",
      description: "Customize Juristo with your branding and deliver a seamless, professional experience to your clients.",
      gradient: "from-emerald-500 to-blue-500",
      bgGradient: "from-emerald-100 via-blue-50 to-white"
    }
  ]

  const plans = [
    {
      name: 'Starter',
      price: 0,
      description: 'Perfect for solo practitioners and small legal teams',
      benefits: [
        "5 AI consultations per month",
        "Basic document templates",
        "Email support",
        "Client portal access",
        "Basic compliance alerts"
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      description: 'Ideal for growing law firms and legal departments',
      benefits: [
        "Unlimited AI consultations",
        "Advanced document automation",
        "Priority support",
        "Custom client portals",
        "Full compliance suite",
        "API access",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      description: 'For large firms requiring maximum customization',
      benefits: [
        "Everything in Professional",
        "White-label solutions",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment option",
        "Advanced security features",
        "Custom training & onboarding"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 opacity-60"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Legal Solutions for Modern Practices
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-none">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Legal Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your legal practice with AI-driven automation, intelligent document management, 
              and seamless client experiences that save time and increase efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border">
                <Search className="absolute left-6 top-5 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ask anything about legal procedures, compliance, or case management..."
                  className="w-full pl-16 pr-6 py-5 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Feature Cards */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Powerful Features for Modern Legal Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Juristo's comprehensive suite of tools can streamline your workflow 
              and enhance client satisfaction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transform rotate-[-2deg] transition-transform group-hover:rotate-0 opacity-50`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transform rotate-[1deg] transition-transform group-hover:rotate-0 opacity-30`}></div>
                  <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-6">
                      <Button variant="ghost" className="p-0 text-blue-600 hover:text-blue-700">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Enhanced API Documentation Preview */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Developer Friendly
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Seamless API Integration
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The Juristo API provides developers with powerful tools to integrate 
                advanced legal solutions, document automation, and compliance monitoring 
                directly into their applications with just a few lines of code.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Enterprise Security</h4>
                    <p className="text-gray-600">Bank-level encryption and compliance with legal industry standards</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Lightning Fast</h4>
                    <p className="text-gray-600">Sub-100ms response times with global CDN distribution</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">24/7 Support</h4>
                    <p className="text-gray-600">Dedicated developer support and comprehensive documentation</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" variant="outline" className="mr-4">
                  View Documentation
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get API Key
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl border shadow-2xl overflow-hidden">
                <div className="border-b p-6 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-500 ml-4">api.juristo.com</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4 font-mono text-sm">
                    <div className="text-green-600">// GET /v1/legal-analysis</div>
                    <div className="text-gray-800">
                      <span className="text-blue-600">curl</span> -X GET \<br/>
                      <span className="ml-4">https://api.juristo.com/v1/legal-analysis \</span><br/>
                      <span className="ml-4 text-orange-600">-H "Authorization: Bearer YOUR_API_KEY" \</span><br/>
                      <span className="ml-4 text-orange-600">-H "Content-Type: application/json"</span>
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-gray-600">{`{
  "status": "success",
  "data": {
    "analysis_id": "la_abc123",
    "confidence": 0.94,
    "legal_category": "contract_law",
    "recommendations": [
      "Review clause 3.2",
      "Add termination clause"
    ],
    "compliance_score": 98
  }
}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Pricing Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Flexible pricing designed to grow with your practice, from solo attorneys 
              to enterprise law firms.
            </p>
            <div className="inline-flex items-center rounded-full border-2 p-1 bg-white shadow-lg">
              <Button
                variant={billingPeriod === 'monthly' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-full px-6"
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </Button>
              <Button
                variant={billingPeriod === 'yearly' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-full px-6"
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly
                <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Save 20%</span>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white scale-105 shadow-2xl'
                    : 'bg-white shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">₹{plan.price}</span>
                    <span className={`text-lg ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                      /month
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 ${plan.popular ? 'text-blue-200' : 'text-green-600'}`} />
                      <span className={plan.popular ? 'text-blue-100' : 'text-gray-700'}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg"
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-blue-50' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  }`}
                >
                  {plan.price === 0 ? 'Start Free' : 'Start Trial'}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom solution? 
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join thousands of legal professionals who trust Juristo to streamline their workflow, 
            enhance client relationships, and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}