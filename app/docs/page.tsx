import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-xl sm:text-2xl font-semibold">Getting Started</h1>
        
        <div className="bg-[#F8F9FC] rounded-lg p-4 sm:p-6">
          <p className="text-[#4B6BFB] text-sm leading-relaxed">
            The Juristo API allows developers to seamlessly integrate advanced legal solutions, such as document automation, compliance monitoring, and case tracking into their applications.
          </p>
          
          <div className="mt-4 sm:mt-6 space-y-2">
            <p className="text-sm font-medium">Note</p>
            <p className="text-sm text-gray-600">
              To use the API on behalf of third parties, you must set up the partner network. Reach out to our sales team to get started.
            </p>
            <Link href="#" className="text-[#4B6BFB] text-sm hover:underline">
              Partner with Juristo →
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-medium">Endpoint URL</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="bg-[#4B6BFB] text-white px-3 py-1.5 rounded text-sm font-medium">
              GET
            </div>
            <input 
              type="text" 
              value="https://api.juristo.com/v1/endpoint"
              readOnly
              className="flex-1 bg-[#F8F9FC] text-sm px-3 py-1.5 rounded border border-gray-200 w-full sm:w-auto"
            />
            <button className="text-[#4B6BFB] text-sm hover:underline">
              Copy
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Using transactions. Specify one or more query parameters to filter the transaction that applies to your use case.
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 sm:p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">Request ▼</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
{`{
  "api_version": "2024-01",
  "auth": {
    "type": "application/json",
    "headers": {
      "Authorization": "Bearer <API_KEY>"
    }
  },
  "params": {
    "limit": 10,
    "offset": 0
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}

