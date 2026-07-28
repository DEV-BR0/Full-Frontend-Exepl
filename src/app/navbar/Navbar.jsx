'use client'

import { CircleUser, LayoutDashboard, Receipt, Wallet } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {
  const [active, setActive] = useState('dashboard')
  return (
    <div className="w-[280px] h-full bg-[#F8FAFC]">
      <div className="fixed p-[30px] h-full flex flex-col gap-[40px] w-[280px] shadow-[inset_0_-4px_6px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] rounded-xl bg-[#006E2F] ">
            <Wallet color="white" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#166534] font-bold text-[18px]">Fiscal Atelier</p>
            <p className="flex gap-[10px] text-[#3D4A3D] text-[10px]">
              Wealth <span>Management</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] w-full">
          <Link
            href="/"
            onClick={() => {
              setActive('dashboard')
            }}
            className={
              active == 'dashboard'
                ? `flex gap-[10px] w-full hover:text-[#006E2F] rounded-2xl text-[#006E2F] shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] p-[20px] transition-all duration-400 relative overflow-hidden`
                : `flex gap-[10px] hover:text-[#006E2F] transition duration-400 p-[20px] relative overflow-hidden rounded-2xl hover:shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] w-full`
            }
          >
            {active == 'dashboard' ? (
              <div className="text-[40px]  left-[-5px] top-[-5px] absolute overflow-hidden bg-[#006E2F] w-[10px] h-full"></div>
            ) : (
              ''
            )}
            <LayoutDashboard />
            Dashboard
          </Link>
          <Link
            href="/transactions"
            onClick={() => {
              setActive('about')
            }}
            className={
              active == 'about'
                ? `flex gap-[10px] hover:text-[#006E2F] rounded-2xl text-[#006E2F] shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] p-[20px] transition-all duration-400 relative overflow-hidden`
                : `flex gap-[10px] hover:text-[#006E2F] transition duration-400 p-[20px] relative overflow-hidden rounded-2xl hover:shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]`
            }
          >
            {active == 'about' ? (
              <div className="text-[40px]  left-[-5px] top-[-5px] absolute overflow-hidden bg-[#006E2F] w-[10px] h-full over"></div>
            ) : (
              ''
            )}
            <Receipt />
            Transactions
          </Link>
          <Link
            href="/userlist"
            onClick={() => {
              setActive('user')
            }}
            className={
              active == 'user'
                ? `flex gap-[10px] hover:text-[#006E2F] rounded-2xl text-[#006E2F] shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] p-[20px] transition-all duration-400 relative overflow-hidden`
                : `flex gap-[10px] hover:text-[#006E2F] transition duration-400 p-[20px] relative overflow-hidden rounded-2xl hover:shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]`
            }
          >
            {active == 'user' ? (
              <div className="text-[40px]  left-[-5px] top-[-5px] absolute overflow-hidden bg-[#006E2F] w-[10px] h-full over"></div>
            ) : (
              ''
            )}
            <CircleUser />
            Users List
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
