import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="space-y-6">
          <h3 className="font-semibold">Categories</h3>
          <div className="grid gap-3">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">User Interface</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">User Experience</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Digital Media</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Programming</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold">Product</h3>
          <div className="grid gap-3">
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900">Overview</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Browse</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Accessibility</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold">Solutions</h3>
          <div className="grid gap-3">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Brainstorming</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Wireframing</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Research</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Design</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold">Resources</h3>
          <div className="grid gap-3">
            <Link href="/support" className="text-sm text-gray-600 hover:text-gray-900">Help Center</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Tutorials</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold">Support</h3>
          <div className="grid gap-3">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</Link>
            <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">Developers</Link>
            <Link href="/docs" className="text-sm text-gray-600 hover:text-gray-900">Documentation</Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold">Company</h3>
          <div className="grid gap-3">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Events</Link>
            <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Customers</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Partners</Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-sm font-medium">J</span>
              </div>
              <span className="text-sm font-semibold">Juristo</span>
            </Link>
            <span className="text-sm text-gray-600">© 2025. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 16.979H7.005v-1.938h9.99v1.938zm0-4.031H7.005v-1.938h9.99v1.938zm0-4.032H7.005V6.979h9.99v1.937z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

