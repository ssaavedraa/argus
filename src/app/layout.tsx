import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HEX | Negocios inteligentes',
  description: 'El futuro del emprendimiento',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark text-foreground bg-background'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
