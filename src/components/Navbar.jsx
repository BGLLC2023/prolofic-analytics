import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Skills', 'Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, label) => {
    e.preventDefault()
    setOpen(false)
    const id = label === 'Home' ? 'hero' : label.toLowerCase()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#hero" onClick={e => handleNav(e, 'Home')}>
          <span className="bracket">&lt;</span>PAD<span className="bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l === 'Home' ? 'hero' : l.toLowerCase()}`} onClick={e => handleNav(e, l)}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={e => handleNav(e, 'Contact')}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
