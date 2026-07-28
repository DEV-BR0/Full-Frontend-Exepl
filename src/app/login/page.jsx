import { Wallet } from 'lucide-react'

export const metadata = {
  title: 'Fiscal Atelier | Login',
}

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex  flex-col justify-center items-center w-[400px]">
        <div className="w-[30%]">
          <Wallet className='w-full text-white bg-[] '/>
        </div>
      </div>
    </div>
  )
}
