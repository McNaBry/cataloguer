import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

const emerland = localFont({ 
  src: '../public/fonts/EmerlandRegular.ttf',
  variable: '--font-emerland'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

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
    <html lang="en" className="h-full bg-sorrell-brown text-white m-0 p-0">
      <body className={`h-full m-0 p-0 ${emerland.variable} ${inter.variable} font-inter`}>{children}</body>
    </html>
  )
}
