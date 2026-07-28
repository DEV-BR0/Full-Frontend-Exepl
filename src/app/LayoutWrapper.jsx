'use client'

import { usePathname } from 'next/navigation'
import Hed from '@/app/head/Hed'
import Navbar from '@/app/navbar/Navbar'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()

  const hideLayout = ['/login', '/register'].includes(pathname)

  if (hideLayout) {
    return children
  }

  return (
    <div className="flex">
      <Navbar />
      <div className="flex flex-col">
        <Hed />
        {children}
      </div>
    </div>
  )
}
