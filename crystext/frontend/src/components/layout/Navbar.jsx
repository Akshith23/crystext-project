import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../../data/content'
import { useActiveSection } from '../../hooks/useActiveSection'

function CrystalLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <defs>
        <linearGradient id="crystext-logo-gradient" x1="8" x2="42" y1="6" y2="42">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="55%" stopColor="#D66B23" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        d="M24 4 41.3 14v20L24 44 6.7 34V14L24 4Z"
        fill="#FFFBF5"
        stroke="url(#crystext-logo-gradient)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M24 4v17M41.3 14 24 21 6.7 14M24 21v23" fill="none" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M14 19.5 24 34l10-14.5" fill="none" stroke="#FF7A00" strokeLinecap="round" strokeWidth="2.4" />
      <circle cx="24" cy="21" r="3.2" fill="#4D7C59" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (event, href) => {
    event.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E7D7C9] bg-[#FFFBF5]/90 shadow-[0_12px_36px_rgba(109,71,33,0.1)] backdrop-blur-xl'
          : 'bg-[#FFF7ED]/70 backdrop-blur-sm'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="flex items-center gap-3 font-display text-lg font-bold text-[#1F2937]"
        >
          <CrystalLogo />
          CrysText
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className={`relative text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-[#1F2937]' : 'text-[#6F6257] hover:text-[#1F2937]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#8B5CF6]"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href="#demo"
          onClick={(event) => handleNavClick(event, '#demo')}
          className="btn-primary hidden !px-5 !py-2.5 !text-xs lg:inline-flex"
        >
          Try the Demo
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-2xl text-[#1F2937] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#E7D7C9] bg-[#FFFBF5]/98 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="block text-sm font-semibold text-[#6F6257] hover:text-[#1F2937]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
