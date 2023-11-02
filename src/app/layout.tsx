import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Provider from "./_trpc/provider"

const nunito = Nunito({ subsets: ["latin"] })

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
      <body className={nunito.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
