import React, { useState, useEffect } from 'react'
import { Scale, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Services', 'Process', 'Partners', 'Contact']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1F3A]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center shadow-md">
            <Scale size={18} className="text-navy" strokeWidth={2.5} />
          </div>
          <div>
            <span className="font-display font-700 text-white text-xl tracking-tight">
              Settlement  <span className='text-green-200'>Of</span>  <span className="text-[#FFD700]">Loan</span>
            </span>
            <div className="text-[9px] text-white/40 tracking-[0.15em] uppercase font-mono -mt-0.5">
              Legal Financial Services
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-[#FFD700] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FFD700] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1F3A]/98 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-white/80 hover:text-[#FFD700] font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary block text-center px-5 py-3 rounded-lg text-sm font-semibold mt-4"
          >
            Free Consultation
          </a>
        </div>
      )}
    </header>
  )
}
