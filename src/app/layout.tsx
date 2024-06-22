import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import './globals.css'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data/client'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davit Tavadze | Resume',
  description:
    'Experienced Full-Stack Developer proficient in Next.js, TailwindCSS, and MongoDB. Skilled in building dynamic, scalable web applications with a focus on performance and user experience.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
