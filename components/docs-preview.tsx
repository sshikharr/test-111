export default function DocsPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            <p className="text-gray-600 mb-6">
              The Juristo API allows developers to seamlessly integrate advanced legal solutions, such as document automation, compliance monitoring, and case tracking into their applications.
            </p>
            <div className="bg-white rounded-lg p-6 border mb-6">
              <h3 className="text-lg font-semibold mb-2">Endpoint URL</h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
                GET https://api.juristo.com/v1/endpoint
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Using transactions. Specify one or more query parameters to filter the transaction that applies to your use case.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl border shadow-lg">
              <div className="border-b p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-4 font-mono text-sm">
                <pre className="text-gray-800">
                  {`{
  "status": "success",
  "data": {
    "id": "tx_123",
    "type": "document",
    "attributes": {
      "title": "Contract",
      "status": "active"
    }
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

