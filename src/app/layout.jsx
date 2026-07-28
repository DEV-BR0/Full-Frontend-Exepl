import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/Navbar'

const inter = Inter({
  subsets: ['latin'],
})
export const metadata = {
  title: 'Example CRM',
  description: 'FULL CRM Good',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col min-h-full ">
          <div className="flex">
            {' '}
            <Navbar /> {children}
          </div>
        </div>
      </body>
    </html>
  )
}
