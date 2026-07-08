import type { Metadata } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Krish Chopra',
    template: '%s — Krish Chopra',
  },
  description:
    'Film critic and Cinema Studies scholar. Essays, criticism, and video work on film theory, spectatorship, and the politics of form.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Nav />
          <main id="main" style={{ paddingTop: 'var(--nav-h)' }}>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
