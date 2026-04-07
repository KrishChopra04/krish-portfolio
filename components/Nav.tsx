'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'home' },
  { href: '/writing', label: 'writing' },
  { href: '/shorts', label: 'shorts' },
  { href: '/about', label: 'about' },
  { href: '/contact', label: 'contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-h)',
        background: 'var(--white)',
        borderBottom: '1px solid var(--gray-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        zIndex: 100,
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--serif)',
          fontSize: '18px',
          letterSpacing: '-0.01em',
          color: 'var(--black)',
        }}>
          Krish Chopra
        </Link>

        {/* Desktop links */}
        <ul style={{
          display: 'flex',
          gap: '36px',
          listStyle: 'none',
        }} className="nav-desktop">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: active ? 'var(--black)' : 'var(--gray-muted)',
                    transition: 'color 0.15s, transform 0.15s',
                    display: 'inline-block',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={toggle}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--gray-muted)',
              padding: '0',
            }}
          >
            {dark ? 'Light' : 'Dark'}
          </button>

          {/* Hamburger button -- mobile only */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--black)',
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              padding: '0',
              display: 'none',
            }}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile-menu" style={{
          position: 'fixed',
          top: 'var(--nav-h)',
          left: 0,
          right: 0,
          background: 'var(--white)',
          borderBottom: '1px solid var(--gray-light)',
          zIndex: 99,
          padding: '24px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  color: active ? 'var(--black)' : 'var(--gray-muted)',
                }}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
