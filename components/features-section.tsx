import { Calendar, MessageSquare, BookOpen, Video } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Chatbot Features</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered chatbot is designed to streamline client interactions, automate document workflows, and provide legal teams with faster, smarter tools for everyday practice.
          </p>
          <Button className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700">Try demo today</Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 rounded-xl border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Natural Language Processing (NLP)</h3>
            <p className="text-gray-600">
              Understands client questions in plain English (and multiple languages) to provide instant, accurate answers about legal services, processes, and case updates.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Document Automation</h3>
            <p className="text-gray-600">
              Automatically generate contracts, agreements, and client letters by pulling details from chatbot interactions—reducing manual drafting time dramatically.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Legal Knowledge Base</h3>
            <p className="text-gray-600">
              Integrated with your firm’s legal resources, FAQs, and statutes so clients and staff can access accurate legal information 24/7 without searching manually.
            </p>
          </div>

          <div className="p-6 rounded-xl border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Case Tracking</h3>
            <p className="text-gray-600">
              Enables clients to check the real-time status of their cases, appointments, or filings directly through the chatbot—reducing the need for phone calls and emails.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
