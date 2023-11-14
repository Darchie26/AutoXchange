import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'AutoXchange',
  description: 'Get you some the best cars we have',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative"> <Navbar/> {children} <Footer/> </body>
    </html>
  )
}
