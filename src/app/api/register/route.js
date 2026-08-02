import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
export async function POST(request) {
  const data = await request.json()

  const token = jwt.sign(
    {
      id: data.id,
      name: data.name,
      email: data.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  )

  const response = NextResponse.json({
    success: true,
  })

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  })

  return response
}
