import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About',      href: '/#about' },
  { label: 'Projects',   href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact',    href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>Yeonseung Chang</Link>

        {/* Desktop links */}
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#resume"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>
      </div>
    </nav>
  )
}
