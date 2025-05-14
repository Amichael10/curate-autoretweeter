"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wallet, ArrowRight, HelpCircle } from "lucide-react"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [walletOptions, setWalletOptions] = useState(false)

  return (
    <div className="min-h-screen bg-[#e1ebff] p-8 grid place-items-center font-mono">
      <div className="w-full max-w-md">
        <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rfjsPCrwjn54k6E9xrp0El4E4N3zIE.png"
              alt="Curate.fun Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <h1 className="text-2xl font-londrina mb-2 text-center">Curate.fun</h1>
          <p className="text-center mb-6 text-gray-600">Twitter bot that auto-retweets based on your rules</p>

          {!isLoggedIn ? (
            <div className="space-y-6">
              <div className="bg-[#f0f4ff] border-2 border-black p-4 flex items-center">
                <div className="w-8 h-8 bg-red-100 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  1
                </div>
                <div>
                  <div className="font-bold">Step 1: Connect Your Wallet</div>
                  <div className="text-sm text-gray-600">Required to use the bot</div>
                </div>
              </div>

              {!walletOptions ? (
                <Button
                  className="w-full bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-center gap-2"
                  onClick={() => setWalletOptions(true)}
                >
                  <Wallet className="h-5 w-5" />
                  Connect Wallet
                </Button>
              ) : (
                <div className="space-y-3">
                  <Button
                    className="w-full bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-between"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-xs mr-2">
                        M
                      </div>
                      Meteor Wallet
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-between"
                    disabled
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 border-2 border-black rounded-full flex items-center justify-center font-bold text-xs mr-2">
                        N
                      </div>
                      MyNEAR Wallet
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Coming Soon</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-between"
                    disabled
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-200 border-2 border-black rounded-full flex items-center justify-center font-bold text-xs mr-2">
                        H
                      </div>
                      Hot Wallet
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Coming Soon</span>
                  </Button>
                </div>
              )}

              <TooltipProvider>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <span>Why do I need to connect a wallet?</span>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xs">
                      <p>
                        Connecting a wallet is required to use the bot. This helps us verify your identity and prevent
                        spam.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-[#f0f4ff] border-2 border-black p-4 flex items-center">
                <div className="w-8 h-8 bg-green-100 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  ✓
                </div>
                <div>
                  <div className="font-bold">Wallet Connected</div>
                  <div className="text-sm font-mono">amichaeldesign.testnet</div>
                </div>
              </div>

              <div className="bg-[#f0f4ff] border-2 border-black p-4 flex items-center">
                <div className="w-8 h-8 bg-red-100 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  2
                </div>
                <div>
                  <div className="font-bold">Step 2: Go to Dashboard</div>
                  <div className="text-sm text-gray-600">Set up your Twitter bot</div>
                </div>
              </div>

              <Link href="/dashboard">
                <Button className="w-full bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Continue to Dashboard
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center items-center gap-2">
          <div className="text-sm font-medium">built with</div>
          <div className="text-red-500 text-lg">♥</div>
          <div className="text-sm font-medium">by cooked labs</div>
        </div>
      </div>
    </div>
  )
}
