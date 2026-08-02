import { Search } from 'lucide-react'
import Image from 'next/image'

export default function Hed() {
  return (
    <div className="flex justify-between w-full bg-[#FFFFFF] pt-[15px] pb-[15px]">
      <div className="flex justify-center relative w-[40%] bg-[#EFF4FF] rounded-4xl items-center pl-[10px] ">
        <Search className="" />
        <input
          type="text"
          className="bg-[#EFF4FF] p-[10px] w-full outline-none rounded-4xl"
          placeholder="Search transactions, assets, or users..."
        />
      </div>
      <div className="flex pr-[20px] items-center">
        <div className="flex flex-col">
          <p className="text-[10px] font-bold ">Alexander Vance</p>
          <p className="text-[10px] text-[#3D4A3D]">Admin Access</p>
        </div>
        <Image src="/Image/users.jpg" alt="photo" width={40} height={40} />
      </div>
    </div>
  )
}
