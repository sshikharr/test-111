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
        {/* ---- Services Dropdown ---- */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Services
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/services/research-assistance"
                className={
                  isActive("/services/research-assistance")
                    ? "text-gray-900"
                    : ""
                }
              >
                Research Assistance
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/services/case-prediction"
                className={
                  isActive("/services/case-prediction") ? "text-gray-900" : ""
                }
              >
                Case Prediction
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/services/document-drafting"
                className={
                  isActive("/services/document-drafting") ? "text-gray-900" : ""
                }
              >
                Document Drafting
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* ---- Features Dropdown ---- */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Features
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/features/chatbot"
                className={
                  isActive("/features/chatbot") ? "text-gray-900" : ""
                }
              >
                Chatbot
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/features/api-service"
                className={
                  isActive("/features/api-service") ? "text-gray-900" : ""
                }
              >
                API Service
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/features/white-label"
                className={
                  isActive("/features/white-label") ? "text-gray-900" : ""
                }
              >
                White Label Solutions
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* ---- Pricing Dropdown ---- */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href="/pricing#basic"
                className={isActive("/pricing#basic") ? "text-gray-900" : ""}
              >
                Basic Plan
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/pricing#super"
                className={isActive("/pricing#super") ? "text-gray-900" : ""}
              >
                Super Plan
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/pricing#advance"
                className={isActive("/pricing#advance") ? "text-gray-900" : ""}
              >
                Advance Plan
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
                href="/resources/docs"
                className={isActive("/resources/docs") ? "text-gray-900" : ""}
              >
                Documentation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/resources/support"
                className={isActive("/resources/support") ? "text-gray-900" : ""}
              >
                Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/resources/blogs"
                className={isActive("/resources/blogs") ? "text-gray-900" : ""}
              >
                Blogs
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* ---- Let's Connect ---- */}
        <Link
          href="/signup"
          className={`text-sm ${
            isActive("/signup") ? "text-gray-900" : "text-gray-600"
          } hover:text-gray-900`}
        >
          Let's Connect
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login">
          <Button variant="ghost" className="text-sm">
            Log in
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="text-sm bg-black text-white hover:bg-gray-800">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
