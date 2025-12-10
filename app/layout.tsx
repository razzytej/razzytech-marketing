import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'RazzyTech - AI-Powered Marketing for Car Dealers',
  description: 'Automated ad generation and campaign management for automotive dealerships',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
