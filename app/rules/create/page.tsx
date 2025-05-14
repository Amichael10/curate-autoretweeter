"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, ArrowLeft, HelpCircle, AlertCircle, Plus, X, CreditCard } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CodeEditor } from "@/components/code-editor"

export default function CreateRule() {
  const { toast } = useToast()
  const [ruleName, setRuleName] = useState("")
  const [ruleText, setRuleText] = useState(
    "if the post has a positive tone or is by @michael, then true\nif the post is negative or talks about Solana, then false",
  )
  const [ruleMethod, setRuleMethod] = useState("simple")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [twitterAccount, setTwitterAccount] = useState("@twitter_user")

  // State for simple rule builder
  const [retweetConditions, setRetweetConditions] = useState([
    { id: 1, type: "positive", enabled: true, value: "" },
    { id: 2, type: "user", enabled: true, value: "@michael" },
    { id: 3, type: "likes", enabled: false, value: "5" },
  ])

  const [dontRetweetConditions, setDontRetweetConditions] = useState([
    { id: 1, type: "negative", enabled: true, value: "" },
    { id: 2, type: "keyword", enabled: true, value: "Solana" },
  ])

  const handleSave = () => {
    if (!ruleName.trim()) {
      toast({
        title: "Rule name required",
        description: "Please provide a name for your rule",
        variant: "destructive",
      })
      return
    }

    // Show confirmation screen instead of immediately saving
    setShowConfirmation(true)
  }

  const confirmSave = () => {
    // Simulate saving the rule
    toast({
      title: "Rule saved successfully!",
      description: "Your rule has been added to your rules list",
      className: "border-2 border-black bg-[#70a1ff] text-black font-medium",
    })

    // Navigate to the rules list
    setTimeout(() => {
      window.location.href = "/rules"
    }, 1000)
  }

  const addRetweetCondition = () => {
    const newId = Math.max(0, ...retweetConditions.map((c) => c.id)) + 1
    setRetweetConditions([...retweetConditions, { id: newId, type: "keyword", enabled: true, value: "" }])
  }

  const addDontRetweetCondition = () => {
    const newId = Math.max(0, ...dontRetweetConditions.map((c) => c.id)) + 1
    setDontRetweetConditions([...dontRetweetConditions, { id: newId, type: "keyword", enabled: true, value: "" }])
  }

  const removeRetweetCondition = (id: number) => {
    setRetweetConditions(retweetConditions.filter((c) => c.id !== id))
  }

  const removeDontRetweetCondition = (id: number) => {
    setDontRetweetConditions(dontRetweetConditions.filter((c) => c.id !== id))
  }

  const updateRetweetCondition = (id: number, updates: Partial<(typeof retweetConditions)[0]>) => {
    setRetweetConditions(retweetConditions.map((c) => (c.id === id ? { ...c, ...updates } : c)))
  }

  const updateDontRetweetCondition = (id: number, updates: Partial<(typeof dontRetweetConditions)[0]>) => {
    setDontRetweetConditions(dontRetweetConditions.map((c) => (c.id === id ? { ...c, ...updates } : c)))
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-[#e1ebff] font-mono">
        <Navigation />

        <main className="container mx-auto px-4 py-6">
          <div className="mb-4">
            <button
              onClick={() => setShowConfirmation(false)}
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Rule Editor
            </button>
          </div>

          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-2xl font-bold mb-6">Confirm Your Rule</h1>

            <div className="space-y-6">
              <div className="border-2 border-black p-6 bg-[#f0f4ff] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center mb-6">
                  <p className="text-lg">
                    your bot will automatically retweet mentions by <span className="font-bold">{twitterAccount}</span>
                  </p>
                  <p className="text-sm mt-2">if it follows this rule:</p>
                </div>

                <div className="bg-white border-2 border-black p-4 mb-6">
                  <div className="font-bold mb-2">{ruleName}</div>
                  <pre className="whitespace-pre-wrap text-sm font-mono">{ruleText}</pre>
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-bold text-lg">$5 USDC/month</div>
                  <Button
                    variant="outline"
                    className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] h-10 px-4"
                  >
                    Change Plan
                  </Button>
                </div>
              </div>

              <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="font-bold text-lg mb-4">Payment Method</h2>
                <div className="flex items-center gap-3 p-3 border-2 border-black bg-white">
                  <input type="radio" id="payment-wallet" name="payment" className="w-4 h-4" defaultChecked />
                  <label htmlFor="payment-wallet" className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#70a1ff] border-2 border-black rounded-full flex items-center justify-center font-bold text-xs">
                      M
                    </div>
                    <div>
                      <div className="font-bold">Meteor Wallet</div>
                      <div className="text-xs font-mono">amichaeldesign.testnet</div>
                    </div>
                  </label>
                </div>
              </div>

              <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  <div className="font-bold">Subscription Details</div>
                  <p className="text-sm">
                    You'll be charged $5 USDC per month for this rule. You can cancel anytime from your account
                    settings.
                  </p>
                </AlertDescription>
              </Alert>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmation(false)}
                  className="border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold"
                >
                  Back
                </Button>
                <Button
                  onClick={confirmSave}
                  className="bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-8 h-12 text-base font-bold flex items-center gap-2"
                >
                  <CreditCard className="h-5 w-5" />
                  Confirm & Pay
                </Button>
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

  return (
    <div className="min-h-screen bg-[#e1ebff] font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <Link href="/rules" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Rules
          </Link>
        </div>

        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-6">Create New Retweet Rule</h1>

          <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              <div className="font-bold">How Rules Work</div>
              <p className="text-sm">
                Rules determine which mentions get retweeted. Create a rule using either the simple builder or advanced
                mode.
              </p>
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="rule-name" className="font-bold">
                Rule Name
              </Label>
              <Input
                id="rule-name"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                placeholder="e.g., Positive Mentions Only"
                className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitter-account" className="font-bold">
                Retweet From
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  id="twitter-account"
                  value={twitterAccount}
                  onChange={(e) => setTwitterAccount(e.target.value)}
                  placeholder="@your_twitter_handle"
                  className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xs">
                      <p>This is the Twitter account that will automatically retweet mentions based on your rules.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <Tabs value={ruleMethod} onValueChange={setRuleMethod} className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-6 bg-transparent">
                <TabsTrigger
                  value="simple"
                  className="data-[state=active]:bg-[#70a1ff] data-[state=active]:text-black data-[state=active]:border-black data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black py-2 px-4 font-bold"
                >
                  Simple Builder
                </TabsTrigger>
                <TabsTrigger
                  value="advanced"
                  className="data-[state=active]:bg-[#70a1ff] data-[state=active]:text-black data-[state=active]:border-black data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black py-2 px-4 font-bold"
                >
                  Advanced Mode
                </TabsTrigger>
              </TabsList>

              <TabsContent value="simple" className="mt-0">
                <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
                  <div className="font-bold mb-3">Retweet when:</div>

                  <div className="space-y-4">
                    {retweetConditions.map((condition) => (
                      <div
                        key={condition.id}
                        className="flex items-center gap-2 p-2 border-2 border-black bg-[#f0f4ff] relative"
                      >
                        <input
                          type="checkbox"
                          id={`retweet-condition-${condition.id}`}
                          className="w-4 h-4"
                          checked={condition.enabled}
                          onChange={(e) => updateRetweetCondition(condition.id, { enabled: e.target.checked })}
                        />

                        <select
                          className="flex-1 border-2 border-black p-1 bg-white"
                          value={condition.type}
                          onChange={(e) => updateRetweetCondition(condition.id, { type: e.target.value })}
                        >
                          <option value="positive">Tweet has a positive tone</option>
                          <option value="user">Tweet is from specific user</option>
                          <option value="likes">Tweet has more than X likes</option>
                          <option value="keyword">Tweet contains keyword</option>
                          <option value="hashtag">Tweet contains hashtag</option>
                        </select>

                        {(condition.type === "user" ||
                          condition.type === "keyword" ||
                          condition.type === "hashtag") && (
                          <Input
                            placeholder={
                              condition.type === "user"
                                ? "@username"
                                : condition.type === "hashtag"
                                  ? "#hashtag"
                                  : "keyword"
                            }
                            value={condition.value}
                            onChange={(e) => updateRetweetCondition(condition.id, { value: e.target.value })}
                            className="w-32 border-2 border-black rounded-none shadow-none h-8 text-sm"
                          />
                        )}

                        {condition.type === "likes" && (
                          <>
                            <Input
                              type="number"
                              value={condition.value}
                              onChange={(e) => updateRetweetCondition(condition.id, { value: e.target.value })}
                              className="w-16 border-2 border-black rounded-none shadow-none h-8 text-sm"
                            />
                            <span>likes</span>
                          </>
                        )}

                        <button
                          onClick={() => removeRetweetCondition(condition.id)}
                          className="absolute right-2 top-2 hover:bg-gray-200 p-1 rounded-full"
                          aria-label="Remove condition"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}

                    <Button
                      onClick={addRetweetCondition}
                      variant="outline"
                      className="w-full border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Retweet Condition
                    </Button>
                  </div>

                  <div className="font-bold mt-6 mb-3">Don't retweet when:</div>

                  <div className="space-y-4">
                    {dontRetweetConditions.map((condition) => (
                      <div
                        key={condition.id}
                        className="flex items-center gap-2 p-2 border-2 border-black bg-[#f0f4ff] relative"
                      >
                        <input
                          type="checkbox"
                          id={`dont-retweet-condition-${condition.id}`}
                          className="w-4 h-4"
                          checked={condition.enabled}
                          onChange={(e) => updateDontRetweetCondition(condition.id, { enabled: e.target.checked })}
                        />

                        <select
                          className="flex-1 border-2 border-black p-1 bg-white"
                          value={condition.type}
                          onChange={(e) => updateDontRetweetCondition(condition.id, { type: e.target.value })}
                        >
                          <option value="negative">Tweet has a negative tone</option>
                          <option value="user">Tweet is from specific user</option>
                          <option value="keyword">Tweet contains keyword</option>
                          <option value="hashtag">Tweet contains hashtag</option>
                        </select>

                        {(condition.type === "user" ||
                          condition.type === "keyword" ||
                          condition.type === "hashtag") && (
                          <Input
                            placeholder={
                              condition.type === "user"
                                ? "@username"
                                : condition.type === "hashtag"
                                  ? "#hashtag"
                                  : "keyword"
                            }
                            value={condition.value}
                            onChange={(e) => updateDontRetweetCondition(condition.id, { value: e.target.value })}
                            className="w-32 border-2 border-black rounded-none shadow-none h-8 text-sm"
                          />
                        )}

                        <button
                          onClick={() => removeDontRetweetCondition(condition.id)}
                          className="absolute right-2 top-2 hover:bg-gray-200 p-1 rounded-full"
                          aria-label="Remove condition"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}

                    <Button
                      onClick={addDontRetweetCondition}
                      variant="outline"
                      className="w-full border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Don't Retweet Condition
                    </Button>
                  </div>
                </div>

                <div className="bg-[#f0f4ff] border-2 border-black p-4 mb-4">
                  <div className="font-bold mb-2">Preview of Generated Rule:</div>
                  <pre className="whitespace-pre-wrap bg-white border-2 border-black p-2 text-sm font-mono">
                    {ruleText}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="rule-text" className="font-bold">
                      Rule Definition
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xs">
                          <p>Write conditions using if/then statements. Use "true" to retweet and "false" to ignore.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <div className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <CodeEditor value={ruleText} onChange={setRuleText} language="markdown" height="300px" />
                  </div>
                </div>

                <div className="bg-[#f0f4ff] border-2 border-black p-4 mt-4">
                  <div className="font-bold mb-2">Example Format:</div>
                  <pre className="whitespace-pre-wrap bg-white border-2 border-black p-2 text-sm font-mono">
                    if the post has a positive tone or is by @michael, then true if the post is negative or talks about
                    Solana, then false # You can use markdown for comments ## Advanced conditions: if post.likes &gt; 10
                    && post.hasHashtag('#crypto'), then true
                  </pre>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between pt-4">
              <Link href="/rules">
                <Button
                  variant="outline"
                  className="border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-12 text-base font-bold"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                onClick={handleSave}
                className="bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-8 h-12 text-base font-bold flex items-center gap-2"
              >
                <Save className="h-5 w-5" />
                Continue to Payment
              </Button>
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
