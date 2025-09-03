"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useSidebar } from "@/components/sidebar-provider";

export default function Navigation() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center justify-between px-4 py-4 border-b lg:px-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white text-sm font-medium">J</span>
          </div>
          <span className="text-lg font-semibold">Juristo</span>
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        {/* ---- Home ---- */}
        <Link
          href="/"
          className={`text-sm ${
            isActive("/") ? "text-gray-900" : "text-gray-600"
          } hover:text-gray-900`}
        >
          Home
        </Link>


        {/* ---- Features Dropdown ---- */}
        <Link
          href="/features"
          className={`text-sm ${
            isActive("/features") ? "text-gray-900" : "text-gray-600"
          } hover:text-gray-900`}
        >
          Features
        </Link>

        {/* ---- Pricing Dropdown ---- */}
        <Link
          href="/pricing"
          className={`text-sm ${
            isActive("/pricing") ? "text-gray-900" : "text-gray-600"
          } hover:text-gray-900`}
        >
          Pricing
        </Link>

        {/* ---- Resources Dropdown ---- */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Resources
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/docs"
                className={isActive("/docs") ? "text-gray-900" : ""}
              >
                Documentation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/support"
                className={isActive("/support") ? "text-gray-900" : ""}
              >
                Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/blogs"
                className={isActive("/blogs") ? "text-gray-900" : ""}
              >
                Blogs
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* ---- Let's Connect ---- */}
        <Link
          href="https://www.chat.juristo.in/signup"
          className={`text-sm ${
            isActive("/signup") ? "text-gray-900" : "text-gray-600"
          } hover:text-gray-900`}
        >
          Let's Connect
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="https://www.chat.juristo.in/login">
          <Button variant="ghost" className="text-sm">
            Log in
          </Button>
        </Link>
        <Link href="https://www.chat.juristo.in/signup">
          <Button className="text-sm bg-black text-white hover:bg-gray-800">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
