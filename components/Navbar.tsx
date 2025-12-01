'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
        

<Link
  href="/contact"
  className="flexCenter gap-3 rounded-full border bg-green-600 px-8 py-4 text-white transition-all hover:bg-green-500 w-full"
>
  Contact Us
</Link>

        </div>

        <Image 
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu}>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <div className="flex justify-between items-center p-6 border-b">
              <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
              <button onClick={closeMenu} className="p-2 hover:bg-gray-100 rounded-full">
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6">
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link 
                      href={link.href} 
                      className="block text-lg font-medium text-gray-800 hover:text-green-600 transition-colors py-2"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              Contact Us Button for Mobile
              <div className="mt-8 pt-6 border-t">
              import Link from 'next/link'

<Link
  href="/contact"
  className="flexCenter gap-3 rounded-full border bg-green-600 px-8 py-4 text-white transition-all hover:bg-green-500 w-full"
>
  Contact Us
</Link>

              </div>
            </div>
          </div>
        </div>
      )}

     
    </>
  )
}

export default Navbar