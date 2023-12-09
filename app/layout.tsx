import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cataloguer',
  description: 'Catalog your findings!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-sorrell-brown text-white">
      <body className={`h-full ${inter.className}`}>{children}</body>
    </html>
  )
}
