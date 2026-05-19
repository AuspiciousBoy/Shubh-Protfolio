import { useState, useEffect } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo hoverable">
          <span className="navbar__logo-text">ST</span>
          <span className="navbar__logo-dot"></span>
        </a>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__link hoverable"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setIsOpen(false)}
            >
              <span className="navbar__link-number">0{i + 1}</span>
              <span className="navbar__link-text">{link.label}</span>
            </a>
          ))}
        </div>

        <button
          className={`navbar__hamburger hoverable ${isOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
export default Navbar
