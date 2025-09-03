import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { SidebarProvider } from '@/components/sidebar-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juristo - Legal Solutions',
  description: 'Legal solutions for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col h-full`}>
        <SidebarProvider>
          <Navigation />
          <Sidebar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  )
}

