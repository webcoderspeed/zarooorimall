import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ZarooriMall - Shopping Bhi, Growth Bhi",
  description: "Ultimate digital products bundle for your digital growth journey",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text">
                  ZarooriMall
                </span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
                  Home
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
                  Contact
                </Link>
                <Link href="/terms" className="text-sm font-medium hover:text-teal-600 transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm font-medium hover:text-teal-600 transition-colors">
                  Privacy
                </Link>
              </nav>
              <div className="md:hidden">
                <MobileNav />
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

function MobileNav() {
  return (
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center gap-2 border-none bg-transparent p-0 text-gray-900 transition hover:text-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>

        <nav
          aria-label="Mobile Nav"
          className="absolute end-0 z-50 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
        >
          <div className="p-2">
            <Link
              href="/"
              className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Privacy
            </Link>
          </div>
        </nav>
      </details>
    </div>
  )
}
