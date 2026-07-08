'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/writing', label: 'Writing' },
  { href: '/shorts', label: 'Shorts' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="container nav-inner">
          <Link href="/" className="nav-brand">
            Krish Chopra
          </Link>

          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={toggle}
              className="nav-toggle"
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {dark ? 'Light' : 'Dark'}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="nav-hamburger"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="nav-mobile">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="nav-link"
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
