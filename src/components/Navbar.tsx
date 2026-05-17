import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#jam-buka', label: 'Jam Buka' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mjm">MJM</span>
          <span className="logo-autocare">AUTOCARE</span>
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/628114333331"
              className="nav-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
