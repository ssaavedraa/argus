import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'

const inter = Onest({ subsets: ['latin'] })

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
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
