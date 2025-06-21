import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WebbyWolf Landing Page",
  description: "A clean and responsive landing page built with Next.js 15",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
             {children}
       
      </body>
    </html>
  )
}
