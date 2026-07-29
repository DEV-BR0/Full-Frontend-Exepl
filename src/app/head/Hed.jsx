import { Search } from 'lucide-react';

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
      <div className="fle"></div>
    </div>
  )
}
