import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-[120px] font-bold text-center mb-8 leading-none">
          <span className="bg-gradient-to-r from-blue-100 to-blue-50 bg-clip-text text-transparent">
            SUPPORT
          </span>
        </h1>
        <h2 className="text-3xl font-bold text-center mb-8 -mt-16">
          How can we help?
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Ask a question..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Common Questions */}
      <div className="max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-semibold mb-8">Common Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg">
            <AccordionTrigger className="px-6 text-left hover:no-underline">
              What is Juristo?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              Juristo is an AI-powered platform designed to streamline legal
              practice. It offers real-time legal insights, document drafting
              assistance, and case prediction tools to help legal professionals
              and students navigate complex legal landscapes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg">
            <AccordionTrigger className="px-6 text-left hover:no-underline">
              How does the AI Legal Chatbot work?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              Our AI Legal Chatbot provides instant, clear responses to common
              legal questions. It guides users through various legal processes
              using up-to-date information, making it easier to understand and
              act on legal matters.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg">
            <AccordionTrigger className="px-6 text-left hover:no-underline">
              What legal services does Juristo offer?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              Juristo offers a range of services including legal research
              assistance, automated document drafting, case prediction, and
              multijurisdictional legal support. These features are crafted to
              reduce manual work and boost accuracy in legal practice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border rounded-lg">
            <AccordionTrigger className="px-6 text-left hover:no-underline">
              How can I get started with Juristo?
            </AccordionTrigger>
            <AccordionContent className="px-6 text-gray-600">
              Getting started is simple! Sign up on our website, choose the
              pricing plan that fits your needs, and begin leveraging AI to
              enhance your legal workflow. For any further assistance, our
              support team is here to help.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
