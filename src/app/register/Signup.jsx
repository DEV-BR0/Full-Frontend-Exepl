'use client'
import { Wallet } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault()
    try {
      if (!name || !email || !password) {
        toast.message('Please fill in all fields.')
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now(),
          name: name,
          email: email,
        }),
      })

      const token = await res.json()

      localStorage.setItem('token', token)

      if (res.status == 200 || res.ok) {
        toast.success('Registration successful!')
      } else {
        toast.error(`Internal Server Error Number ${res.status}`)
      }

      setEmail('')
      setName('')
      setPassword('')
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
          onSubmit={submit}
          className="flex flex-col justify-center items-center gap-[20px] w-full"
        >
          <input
            value={name}
            type="name"
            onChange={(e) => setName(e.target.value.trim())}
            placeholder="Enter Your Name"
            className="bg-[#00000013] transition duration-300 p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 ease-in-out w-full "
          />
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value.trim())}
            placeholder="Enter Email"
            className="bg-[#00000013] p-[10px] rounded-xl outline-none shadow-lg shadow-green-500/50 focus:shadow-inner shadow-green-500 transition-all duration-300 ease-in-out w-full"
          />
          <input
            value={password}
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value.trim())}
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
