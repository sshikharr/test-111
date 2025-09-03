import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="w-full md:w-64 border-b md:border-r p-4 md:p-6 hidden md:block">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start font-medium text-sm" asChild>
            <Link href="/docs">Getting Started</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-500 text-sm" asChild>
            <Link href="/docs/quick-start">Quick Start</Link>
          </Button>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Guide</h3>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-gray-500 text-sm" asChild>
              <Link href="/docs/authentication">Authentication</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-500 text-sm" asChild>
              <Link href="/docs/error-handling">Error Handling</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-500 text-sm" asChild>
              <Link href="/docs/responses">Responses</Link>
            </Button>
          </div>
        </div>
      </aside>
      <div className="flex-1 p-4 md:p-6">
        {children}
      </div>
    </div>
  )
}

