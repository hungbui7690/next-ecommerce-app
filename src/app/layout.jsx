import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'
import { ProductsContextProvider } from '@/components/ProductsContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce App',
  description: 'A simple Ecommerce App',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* @ */}
        <ProductsContextProvider>
          {children}
          <Layout />
        </ProductsContextProvider>
      </body>
    </html>
  )
}
