import { LayoutDashboard, Wallet } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="w-[140px] h-full bg-[#F8FAFC]">
      <div className="fixed p-[30px] h-full flex flex-col gap-[20px]">
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
        <div className="flex flex-col gap-[20px]">
          <Link
            href="/"
            className={(activ) =>
              activ
                ? `flex gap-[10px] hover:text-[#006E2F] `
                : `flex gap-[10px] hover:text-[#006E2F] before:content-['|']`
            }
          >
            <LayoutDashboard />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
