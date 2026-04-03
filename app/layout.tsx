import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Krish Chopra',
  description: 'Film critic and Cinema Studies scholar. Essays, criticism, and video work on film theory, spectatorship, and the politics of form.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Nav />
          <main style={{ paddingTop: 'var(--nav-h)' }}>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
