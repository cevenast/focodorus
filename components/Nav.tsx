import Link from 'next/link'

const Nav = () => {
  return(
    <nav className="bg-cyan-950">
      <span className="inline-block py-4 w-8 h-8 bg-gray-400 rounded-full"></span>
      <h1 className="inline px-8 text-xl">Super Title</h1>
      <Link href="/otra">Ir a otra dimension</Link>
      
    </nav>
  )
}

export default Nav