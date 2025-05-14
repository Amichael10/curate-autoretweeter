"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Save, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"

export default function Settings() {
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your bot settings have been updated",
      className: "border-2 border-black bg-[#70a1ff] text-black font-medium",
    })
  }

  return (
    <div className="min-h-screen bg-[#e1ebff] font-mono">
      <Navigation />

      <main className="container mx-auto px-4 py-6">
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl font-bold mb-6">Bot Settings</h1>

          <Alert className="bg-[#f0f4ff] border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              <div className="font-bold">Configure Your Bot</div>
              <p className="text-sm">
                These settings control how your bot behaves. Changes will take effect immediately.
              </p>
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-bold text-lg mb-4">General Settings</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-2 border-black bg-[#f0f4ff]">
                  <div>
                    <Label htmlFor="auto-retweet" className="font-medium">
                      Automatic Retweeting
                    </Label>
                    <p className="text-xs text-gray-600">Enable the bot to automatically retweet based on your rules</p>
                  </div>
                  <Switch id="auto-retweet" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 border-2 border-black bg-[#f0f4ff]">
                  <div>
                    <Label htmlFor="notifications" className="font-medium">
                      Email Notifications
                    </Label>
                    <p className="text-xs text-gray-600">Receive email notifications when your bot retweets</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-3 border-2 border-black bg-[#f0f4ff]">
                  <div>
                    <Label htmlFor="daily-limit" className="font-medium">
                      Daily Retweet Limit
                    </Label>
                    <p className="text-xs text-gray-600">Maximum number of retweets per day (0 = unlimited)</p>
                  </div>
                  <Input
                    id="daily-limit"
                    type="number"
                    defaultValue={20}
                    className="w-24 border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="font-bold text-lg mb-4">Advanced Settings</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border-2 border-black bg-[#f0f4ff]">
                  <div>
                    <Label htmlFor="cooldown" className="font-medium">
                      Retweet Cooldown (minutes)
                    </Label>
                    <p className="text-xs text-gray-600">Minimum time between retweets</p>
                  </div>
                  <Input
                    id="cooldown"
                    type="number"
                    defaultValue={15}
                    className="w-24 border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                </div>

                <div className="flex items-center justify-between p-3 border-2 border-black bg-[#f0f4ff]">
                  <div>
                    <Label htmlFor="debug-mode" className="font-medium">
                      Debug Mode
                    </Label>
                    <p className="text-xs text-gray-600">Log detailed information about bot activity</p>
                  </div>
                  <Switch id="debug-mode" />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleSave}
                className="bg-[#70a1ff] hover:bg-[#5c8df7] text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-8 h-12 text-base font-bold flex items-center gap-2"
              >
                <Save className="h-5 w-5" />
                Save Settings
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
