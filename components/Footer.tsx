import Link from 'next/link'

const links = [
  { label: 'Letterboxd', href: 'https://boxd.it/2cCE7' },
  { label: 'Contact', href: '/contact' },
  { label: 'Instagram', href: 'https://instagram.com/krishchopra_' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/krish-chopra-504966271' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          &copy; 2026 Krish Chopra. Content shared for educational and portfolio
          purposes only.
        </span>

        <div className="footer-links">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
