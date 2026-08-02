import { Wallet } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Fiscal Atelier | Login',
}

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex  flex-col justify-center items-center w-[400px] shadow-[inset_0_0_12px_rgba(0,0,0,0.15)] p-[30px] rounded-3xl gap-[20px]">
        <div className="p-[20px] rounded-2xl text-white bg-[#166534] text-[30px] ">
          <Wallet size={40} />
        </div>
        <form className="flex flex-col justify-center items-center gap-[20px] w-full">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#00000013] transition duration-300 p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 ease-in-out w-full "
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-[#00000013] p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 transition-all duration-300 ease-in-out w-full"
          />
          <button className="p-[10px] cursor-pointer w-full text-white rounded-2xl hover:bg-[#18a34dc4] transition-all duration-300 bg-[#166534]">
            Submit
          </button>
        </form>
        <div className="flex text-[17px]">
          <p>
            Don`t have an account? <Link href={'/register'} className="text-[#166534] font-semibold ">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
