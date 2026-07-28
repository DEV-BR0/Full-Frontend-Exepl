import SignUp from '@/app/register/Signup'

export const metadata = {
  title: 'Fiscal Atelier | Sign Up',
}
export default async function page() {
  return (
    <>
      <SignUp />
    </>
  )
}
