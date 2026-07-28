import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
export async function POST(req) {
  const body = await req.json()

  const { name, email, password } = body

  const token = jwt.sign(
    {
      id: Date.now(),
      name: name,
      email: email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  )


  

  return NextResponse.json({
    success: true,
    message: 'tayyor',
    token,
  })
}
