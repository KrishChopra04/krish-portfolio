import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Krish Chopra.',
}

const details = [
  {
    label: 'Email',
    value: 'krish.12chopra@gmail.com',
    href: 'mailto:krish.12chopra@gmail.com',
  },
  { label: 'Location', value: 'New York, NY — New Delhi, India' },
  { label: 'Letterboxd', value: 'boxd.it/2cCE7', href: 'https://boxd.it/2cCE7' },
]

export default function Contact() {
  return (
    <div className="container">
      <header className="page-head">
        <p className="label">Contact</p>
        <h1>Get in touch.</h1>
      </header>

      <div
        className="section"
        style={{
          paddingBlock: 'var(--s-16)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
          gap: 'var(--s-16)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>
          {details.map(({ label, value, href }) => (
            <div key={label}>
              <p className="label" style={{ marginBottom: 'var(--s-2)' }}>
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="link"
                >
                  {value}
                </a>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>

        <form
          action="https://formspree.io/f/xlgonzjk"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}
        >
          <div className="field">
            <label htmlFor="contact-name" className="label">
              Name
            </label>
            <input id="contact-name" name="name" type="text" required />
          </div>

          <div className="field">
            <label htmlFor="contact-email" className="label">
              Email
            </label>
            <input id="contact-email" name="email" type="email" required />
          </div>

          <div className="field">
            <label htmlFor="contact-message" className="label">
              Message
            </label>
            <textarea id="contact-message" name="message" required />
          </div>

          <button type="submit" className="btn" style={{ width: 'fit-content' }}>
            Send &rarr;
          </button>
        </form>
      </div>
    </div>
  )
}
