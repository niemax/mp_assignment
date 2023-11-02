import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Provider from "./_trpc/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Channel Manager",
  description: "Meeting package channel manager",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
