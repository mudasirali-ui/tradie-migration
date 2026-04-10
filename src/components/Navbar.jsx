import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import TradieLogo from '../assets/tradie-logo.png'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  return (
    <header className="tc-header">
      <div className="tc-header-inner">
        <Link to="/" className="tc-logo" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={TradieLogo} alt="Tradie Migration Logo" style={{ width: '250%', height: '250%', objectFit: 'contain' }} />
          </div>
          <span className="tc-logo-text" style={{ transform: 'translateY(1px)' }}>
            Tradie Migration <span className="tc-logo-sub">Australia</span>
          </span>
        </Link>

        <nav className={`tc-nav ${open ? 'tc-nav-open' : ''}`}>
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/tradies" onClick={close}>
            I&apos;m a Tradie
          </NavLink>
          <NavLink to="/employers" onClick={close}>
            I&apos;m an Employer
          </NavLink>
          <NavLink to="/otsr" onClick={close}>
            OTSR
          </NavLink>
          <NavLink to="/about" onClick={close}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            Contact
          </NavLink>
        </nav>

        <div className="tc-header-cta">
          <Link to="/login" className="tc-btn tc-btn-outline" onClick={close}>
            Login
          </Link>
          <Link to="/signup" className="tc-btn tc-btn-primary" onClick={close}>
            Sign up free
          </Link>
        </div>

        <button
          className={`tc-burger ${open ? 'tc-burger-open' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
