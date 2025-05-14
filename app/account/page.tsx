"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Twitter, Wallet, AlertCircle } from "lucide-react"
import Image from "next/image"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Account() {
  return (
    <div className="min-h-screen bg-[#e1ebff] font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-6">
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-6">Account Information</h1>

          <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              <div className="font-bold">Connected Accounts</div>
              <p className="text-sm">
                These are the accounts connected to your bot. You need both wallet and Twitter to use all features.
              </p>
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Wallet Connection
              </h2>

              <div className="bg-[#f0f4ff] border-2 border-black p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                    M
                  </div>
                  <div className="font-bold">Meteor Wallet</div>
                </div>
                <div className="font-mono text-sm p-2 bg-white border-2 border-black">amichaeldesign.testnet</div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  Disconnect Wallet
                </Button>
              </div>
            </div>

            <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                Twitter Connection
              </h2>

              <div className="bg-[#f0f4ff] border-2 border-black p-4 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                    <Image src="/diverse-avatars.png" alt="Twitter Avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">Twitter User</div>
                    <div className="text-sm text-gray-500">@twitter_user</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white border-2 border-black p-2">
                    <span className="font-bold">Followers:</span> 1,234
                  </div>
                  <div className="bg-white border-2 border-black p-2">
                    <span className="font-bold">Following:</span> 567
                  </div>
                  <div className="bg-white border-2 border-black p-2">
                    <span className="font-bold">Tweets:</span> 890
                  </div>
                  <div className="bg-white border-2 border-black p-2">
                    <span className="font-bold">Joined:</span> Jan 2020
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  Disconnect Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center gap-2">
          <div className="text-sm font-medium">built with</div>
          <div className="text-red-500 text-lg">♥</div>
          <div className="text-sm font-medium">by cooked labs</div>
        </div>
      </footer>
    </div>
  )
}
