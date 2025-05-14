"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Edit, Trash2, Plus, AlertCircle, Eye } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for rules
const initialRules = [
  {
    id: 1,
    name: "Positive Mentions",
    rule: "if the post has a positive tone or is by @michael, then true\nif the post is negative or talks about Solana, then false",
    active: true,
    triggeredCount: 12,
    lastTriggered: "2 hours ago",
  },
  {
    id: 2,
    name: "Crypto News",
    rule: "if the post mentions #bitcoin or #ethereum and has > 5 likes, then true\nelse false",
    active: false,
    triggeredCount: 5,
    lastTriggered: "1 day ago",
  },
]

export default function Rules() {
  const { toast } = useToast()
  const [rules, setRules] = useState(initialRules)
  const [expandedRule, setExpandedRule] = useState<number | null>(null)

  const toggleRule = (id: number) => {
    setRules(
      rules.map((rule) => {
        if (rule.id === id) {
          const newState = !rule.active
          toast({
            title: `Rule ${newState ? "activated" : "deactivated"}`,
            description: `"${rule.name}" is now ${newState ? "active" : "inactive"}`,
            className: `border-2 border-black ${newState ? "bg-[#70a1ff]" : "bg-gray-200"} text-black font-medium`,
          })
          return { ...rule, active: newState }
        }
        return rule
      }),
    )
  }

  const deleteRule = (id: number) => {
    const ruleToDelete = rules.find((r) => r.id === id)
    if (confirm(`Are you sure you want to delete the rule "${ruleToDelete?.name}"?`)) {
      setRules(rules.filter((rule) => rule.id !== id))
      toast({
        title: "Rule deleted",
        description: `"${ruleToDelete?.name}" has been removed`,
        className: "border-2 border-black bg-gray-200 text-black font-medium",
      })
    }
  }

  const toggleExpandRule = (id: number) => {
    setExpandedRule(expandedRule === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-[#e1ebff] font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-6">
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Your Retweet Rules</h1>
            <Link href="/rules/create">
              <Button className="bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-10 text-sm font-bold flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create New Rule
              </Button>
            </Link>
          </div>

          {rules.length === 0 ? (
            <div className="bg-[#f0f4ff] border-2 border-black p-6 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold">No rules found</p>
              <p className="text-sm mt-1 mb-4">Create your first rule to start automating your retweets</p>
              <Link href="/rules/create">
                <Button className="bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all h-10 text-sm font-bold flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create Your First Rule
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  <div className="font-bold">How Rules Work</div>
                  <p className="text-sm">
                    Rules determine which mentions get retweeted. Toggle rules on/off using the switch.
                  </p>
                </AlertDescription>
              </Alert>

              {rules.map((rule) => (
                <div
                  key={rule.id}
                  className={`border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                    rule.active ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          rule.active ? "bg-green-500" : "bg-gray-400"
                        } border border-black`}
                      ></div>
                      <h3 className="font-bold text-lg">{rule.name}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 mr-2">
                        <span className="text-sm font-medium">{rule.active ? "Active" : "Inactive"}</span>
                        <Switch checked={rule.active} onCheckedChange={() => toggleRule(rule.id)} />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] h-8 w-8 p-0"
                        onClick={() => toggleExpandRule(rule.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Link href={`/rules/edit/${rule.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] h-8 w-8 p-0"
                        onClick={() => deleteRule(rule.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {expandedRule === rule.id && (
                    <div className="bg-[#f0f4ff] border-2 border-black p-2 mb-3 font-mono text-sm">
                      <div className="font-bold mb-1 px-2 pt-1">Rule Definition:</div>
                      <pre className="whitespace-pre-wrap bg-white border-2 border-black p-2">{rule.rule}</pre>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-bold">Triggered:</span> {rule.triggeredCount} times
                    </div>
                    <div>
                      <span className="font-bold">Last activity:</span> {rule.lastTriggered}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
