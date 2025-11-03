import { useEffect, useState } from 'react'
import { Utensils, Phone, MapPin, Clock } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-tr from-rose-500 to-amber-400 text-white">
              <Utensils size={18} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Glass & Flame</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#menu" className="text-gray-700 hover:text-gray-900">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#visit" className="text-gray-700 hover:text-gray-900">Visit</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-sm text-gray-800 hover:bg-white"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
            >
              <Clock size={16} /> Reserve
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
