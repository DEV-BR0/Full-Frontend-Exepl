import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req) {
  const { name, email, password } = await req.json()

  const filePath = path.join(process.cwd(), 'src/data/data.json')

  const file = await fs.readFile(filePath, 'utf-8')

  const data = JSON.parse(file)


  const existUser = data.users.find((user) => user.email === email)

  if (existUser) {
    return Response.json(
      {
        message: 'User already exists',
      },
      {
        status: 400,
      }
    )
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  )

  user.token = token

  data.users.push(user)

  await fs.writeFile(filePath, JSON.stringify(data, null, 2))

  return Response.json(
    {
      message: 'Register success',
      token,
      user,
    },
    {
      status: 201,
    }
  )
}
