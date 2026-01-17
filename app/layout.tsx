import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ECI Computer - Free Online Computer Courses with Government Approved Certificate',
  description: 'Learn computer courses for free. Get Government Approved Certificate at just ₹100. DCA, Tally Prime, PGDCA, CCC, Video Editing, Advance Excel and more.',
  keywords: 'ECI Computer, online computer courses, government approved certificate, DCA, Tally Prime, PGDCA, CCC, free education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
