"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, LogOut, Home, List } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <header className="bg-white border-b-2 border-black sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rfjsPCrwjn54k6E9xrp0El4E4N3zIE.png"
              alt="Curate.fun Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-londrina text-xl">Curate.fun</span>
          </Link>

          <nav className="flex items-center">
            <div className="hidden md:flex items-center border-2 border-black">
              <Link
                href="/dashboard"
                className={`px-4 py-2 font-medium flex items-center gap-1 ${
                  isActive("/dashboard") ? "bg-[#70a1ff]" : "hover:bg-gray-100"
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/rules"
                className={`px-4 py-2 font-medium flex items-center gap-1 border-l-2 border-black ${
                  isActive("/rules") ? "bg-[#70a1ff]" : "hover:bg-gray-100"
                }`}
              >
                <List className="h-4 w-4" />
                <span>Rules</span>
              </Link>
              <Link
                href="/account"
                className={`px-4 py-2 font-medium flex items-center gap-1 border-l-2 border-black ${
                  isActive("/account") ? "bg-[#70a1ff]" : "hover:bg-gray-100"
                }`}
              >
                <User className="h-4 w-4" />
                <span>Account</span>
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-2 ml-4">
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="icon"
                  className={`border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] ${
                    isActive("/dashboard") ? "bg-[#70a1ff]" : ""
                  }`}
                >
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/rules">
                <Button
                  variant="outline"
                  size="icon"
                  className={`border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] ${
                    isActive("/rules") ? "bg-[#70a1ff]" : ""
                  }`}
                >
                  <List className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/account">
                <Button
                  variant="outline"
                  size="icon"
                  className={`border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] ${
                    isActive("/account") ? "bg-[#70a1ff]" : ""
                  }`}
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="ml-4">
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  <LogOut className="h-5 w-5 mr-1 md:mr-2" />
                  <span className="hidden md:inline">Logout</span>
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
