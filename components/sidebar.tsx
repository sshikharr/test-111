'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useSidebar } from "@/components/sidebar-provider"

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <Sheet open={isOpen} onOpenChange={toggleSidebar}>
      <SheetContent side="left" className="w-[240px] sm:w-[300px] p-0">
        <ScrollArea className="h-full py-6 px-4">
          <div className="space-y-4">
            <div className="py-2">
              <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                Menu
              </h2>
              <div className="space-y-1">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href="/features">Features</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href="/pricing">Pricing</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href="/docs">Documentation</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href="/support">Support</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href="/careers">Careers</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

