import { UserButton } from '@clerk/nextjs'

const Home=()=> {
  return (
    <div>
      <p>Homefsf</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Home
