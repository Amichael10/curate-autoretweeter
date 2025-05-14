import type React from "react"
import type { Metadata } from "next"
import { Inter, Londrina_Solid } from "next/font/google"
import "./globals.css"
import { ToastProvider } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })
const londrinaSolid = Londrina_Solid({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-londrina-solid",
})

export const metadata: Metadata = {
  title: "Curate.fun Autoretweeter",
  description: "Twitter bot that automatically retweets based on rules",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${londrinaSolid.variable}`}>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  )
}
