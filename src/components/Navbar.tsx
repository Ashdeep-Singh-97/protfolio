import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidedrawer = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="text-3xl sticky top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-around">
        <div>
        <a className="flex items-center space-x-2" href="/">
          <span className="font-bold">Arsh</span>
        </a>
        </div>
        <div></div>
        <div></div>
        <div>
        <nav className="text-xl hidden md:flex ml-auto space-x-6 font-medium justify-end">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-600">
              {link.label}
            </a>
          ))}
        </nav>
        </div>

        <button className="md:hidden" onClick={toggleSidedrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-background shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <span className="font-bold">Menu</span>
          <button onClick={toggleSidedrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 bg-white">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="py-2" onClick={toggleSidedrawer}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
