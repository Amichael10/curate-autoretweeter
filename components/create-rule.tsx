"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"

interface CreateRuleProps {
  onSave: () => void
}

export function CreateRule({ onSave }: CreateRuleProps) {
  const { toast } = useToast()
  const [ruleName, setRuleName] = useState("")
  const [ruleText, setRuleText] = useState(
    "if the post has a positive tone or is by @michael, then true\nif the post is negative or talks about Solana, then false",
  )
  const [showPreview, setShowPreview] = useState(true)

  const handleSave = () => {
    if (!ruleName.trim()) {
      toast({
        title: "Rule name required",
        description: "Please provide a name for your rule",
        variant: "destructive",
      })
      return
    }

    // Simulate saving the rule
    toast({
      title: "Rule saved successfully!",
      description: "Your rule has been added to your rules list",
      className: "border-2 border-black bg-[#70a1ff] text-black font-medium",
    })

    // Navigate to the rules list
    setTimeout(() => {
      onSave()
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="inline-block bg-[#70a1ff] text-black font-bold px-4 py-2 border-2 border-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        Create New Retweet Rule
      </div>

      <div className="space-y-4">
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
          <Label htmlFor="rule-text" className="font-bold">
            Rule Definition
          </Label>
          <Textarea
            id="rule-text"
            value={ruleText}
            onChange={(e) => setRuleText(e.target.value)}
            className="min-h-[120px] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono"
          />
        </div>

        {showPreview && (
          <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <div className="font-bold mb-1">Rule Preview:</div>
              <p className="text-sm">
                When someone mentions your account, this rule will check if the content is positive or from @michael
                (which would trigger a retweet), or if it's negative or about Solana (which would be ignored).
              </p>
            </AlertDescription>
          </Alert>
        )}

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleSave}
            className="bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-8 h-12 text-base font-bold flex items-center gap-2"
          >
            <Save className="h-5 w-5" />
            Save Rule
          </Button>
        </div>
      </div>
    </div>
  )
}
