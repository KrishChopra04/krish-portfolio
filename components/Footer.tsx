import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--gray-light)',
      padding: '24px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '10px',
        letterSpacing: '0.08em',
        color: 'var(--gray-muted)',
      }}>
        &copy; 2025 Krish Chopra. Content shared for educational and portfolio purposes only.
      </span>

      <div style={{ display: 'flex', gap: '24px' }}>
        {[
          { label: 'Letterboxd', href: 'https://boxd.it/2cCE7' },
          { label: 'Contact', href: '/contact' },
          { label: 'Disclaimer', href: '/disclaimer' },
          { label: 'Instagram', href: 'https://instagram.com/krishchopra_' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/krish-chopra-504966271' },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'var(--gray-muted)',
              transition: 'color 0.15s',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}
