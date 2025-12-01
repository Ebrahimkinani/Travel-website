import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
     <Link href="/" className="flex items-center gap-2">
     <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
     
     </Link>
   </nav>
  )
}

export default Header