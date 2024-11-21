import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce App',
  description: 'A simple Ecommerce App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}

        {/* @ */}
        <Layout />
      </body>
    </html>
  )
}
