"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, ArrowRight, AlertCircle, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [twitterConnected, setTwitterConnected] = useState(false)
  const [showTwitterPopup, setShowTwitterPopup] = useState(false)
  const [twitterToken, setTwitterToken] = useState("")
  const [twitterSecret, setTwitterSecret] = useState("")

  const handleConnectTwitter = () => {
    setShowTwitterPopup(true)
  }

  const handleTwitterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (twitterToken && twitterSecret) {
      setTwitterConnected(true)
      setShowTwitterPopup(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#e1ebff] font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-6">
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          {!twitterConnected ? (
            <div className="space-y-6">
              <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  <div className="font-bold">Connect Twitter to Continue</div>
                  <p className="text-sm">You need to connect your Twitter account before creating rules.</p>
                </AlertDescription>
              </Alert>

              <div className="bg-white border-2 border-black p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold mb-2">Connect Your Twitter Account</h2>
                  <p className="text-gray-600">
                    This allows the bot to monitor mentions and automatically retweet based on your rules.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    onClick={handleConnectTwitter}
                    className="bg-[#1DA1F2] hover:bg-[#1a94df] text-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-8 h-12 text-base font-bold flex items-center gap-2"
                  >
                    <Twitter className="h-5 w-5" />
                    Connect Twitter
                  </Button>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  <div className="font-bold mb-1">What permissions will be requested:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Read your tweets and profile</li>
                    <li>See accounts you follow</li>
                    <li>Post retweets on your behalf</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-[#f0f4ff] border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold">Twitter Connected</div>
                    <div className="text-sm text-gray-600">@twitter_user</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold">Wallet Connected</div>
                    <div className="text-sm text-gray-600 font-mono">amichaeldesign.testnet</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-black p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h2 className="text-xl font-bold">Create Your First Rule</h2>
                  </div>
                  <p className="mb-4 text-gray-600">
                    Rules determine which mentions will be automatically retweeted by your bot.
                  </p>
                  <Link href="/rules/create">
                    <Button className="w-full bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-center gap-2">
                      <ArrowRight className="h-5 w-5" />
                      Create Rule
                    </Button>
                  </Link>
                </div>

                <div className="bg-white border-2 border-black p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h2 className="text-xl font-bold">View Your Rules</h2>
                  </div>
                  <p className="mb-4 text-gray-600">
                    Manage your existing rules, check their performance, and make adjustments.
                  </p>
                  <Link href="/rules">
                    <Button className="w-full bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold flex items-center justify-center gap-2">
                      <ArrowRight className="h-5 w-5" />
                      View Rules
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl font-bold mb-4">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-2 border-black p-4">
                    <div className="w-8 h-8 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm mb-2">
                      1
                    </div>
                    <h3 className="font-bold mb-1">Create Rules</h3>
                    <p className="text-sm text-gray-600">
                      Define conditions for when your bot should retweet mentions.
                    </p>
                  </div>
                  <div className="border-2 border-black p-4">
                    <div className="w-8 h-8 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm mb-2">
                      2
                    </div>
                    <h3 className="font-bold mb-1">Bot Monitors</h3>
                    <p className="text-sm text-gray-600">
                      The bot watches for mentions of your account on Twitter in real-time.
                    </p>
                  </div>
                  <div className="border-2 border-black p-4">
                    <div className="w-8 h-8 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-sm mb-2">
                      3
                    </div>
                    <h3 className="font-bold mb-1">Automatic Retweets</h3>
                    <p className="text-sm text-gray-600">
                      When a mention matches your rules, the bot automatically retweets it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Twitter Connection Popup */}
      {showTwitterPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-md relative">
            <button
              onClick={() => setShowTwitterPopup(false)}
              className="absolute top-4 right-4 hover:bg-gray-100 p-1 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <Twitter className="h-6 w-6 text-[#1DA1F2]" />
              <h2 className="text-xl font-bold">Connect Twitter Account</h2>
            </div>

            <form onSubmit={handleTwitterSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="twitter-token" className="font-bold text-sm">
                  Twitter API Token
                </label>
                <Input
                  id="twitter-token"
                  value={twitterToken}
                  onChange={(e) => setTwitterToken(e.target.value)}
                  placeholder="Enter your Twitter API token"
                  className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="twitter-secret" className="font-bold text-sm">
                  Twitter API Secret
                </label>
                <Input
                  id="twitter-secret"
                  type="password"
                  value={twitterSecret}
                  onChange={(e) => setTwitterSecret(e.target.value)}
                  placeholder="Enter your Twitter API secret"
                  className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  required
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#1DA1F2] hover:bg-[#1a94df] text-white border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold"
                >
                  Connect Twitter Account
                </Button>
              </div>

              <div className="text-xs text-gray-500 pt-2">
                <p>
                  You can find your Twitter API tokens in your Twitter Developer Portal.
                  <a href="#" className="text-[#1DA1F2] hover:underline">
                    {" "}
                    Learn more
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

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
