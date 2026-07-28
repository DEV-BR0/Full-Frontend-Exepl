'use client'
import { Wallet } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function HandleSubmit(e) {
    e.preventDefault()

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      if (response.ok) {
        console.log('Success')
      } else {
        console.log('Error')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex  flex-col justify-center items-center w-[400px] shadow-[inset_0_0_12px_rgba(0,0,0,0.15)] p-[30px] rounded-3xl gap-[20px]">
        <div className="p-[20px] rounded-2xl text-white bg-[#166534] text-[20px] flex justify-center items-center gap-[10px]">
          <Wallet size={40} />
          Sign Up
        </div>
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col justify-center items-center gap-[20px] w-full"
        >
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="bg-[#00000013] transition duration-300 p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 ease-in-out w-full "
          />
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="bg-[#00000013] p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 transition-all duration-300 ease-in-out w-full"
          />
          <input
            value={password}
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#00000013] p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 transition-all duration-300 ease-in-out w-full"
          />

          <button className="p-[10px] cursor-pointer w-full text-white rounded-2xl hover:bg-[#18a34dc4] transition-all duration-300 bg-[#166534]">
            Submit
          </button>
        </form>
        <div className="flex text-[17px]">
          <p>
            Already registered?{' '}
            <Link href={'/login'} className="text-[#166534] font-semibold ">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
