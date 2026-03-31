export default function Contact() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 'calc(100vh - var(--nav-h))',
    }}>
      <div style={{
        padding: '80px 60px 80px 40px',
        borderRight: '1px solid var(--gray-light)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'var(--gray-muted)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Contact
          </p>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px, 3.5vw, 48px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--black)',
          }}>
            Get in touch.
          </h1>

          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { label: 'Email', value: 'krish.12chopra@gmail.com', href: 'mailto:krish.12chopra@gmail.com' },
              { label: 'Location', value: 'New York, NY \u2014 New Delhi, India' },
              { label: 'Letterboxd', value: 'boxd.it/2cCE7', href: 'https://boxd.it/2cCE7' },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-muted)',
                  marginBottom: '6px',
                }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: '15px', color: 'var(--black)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <p style={{ fontSize: '15px', color: 'var(--black)' }}>{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--gray-muted)',
          letterSpacing: '0.06em',
          lineHeight: 1.8,
        }}>
          &copy; 2025 Krish Chopra.<br />
          Content shared for educational and portfolio purposes only.
        </p>
      </div>

      <div style={{
        padding: '80px 40px 80px 60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <form
          action="https://formspree.io/f/xlgonzjk"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
          ].map(({ label, name, type }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--gray-muted)',
              }}>
                {label}
              </label>
              <input
                name={name}
                type={type}
                required
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid var(--gray-light)',
                  padding: '10px 0',
                  fontSize: '14px',
                  color: 'var(--black)',
                  outline: 'none',
                  width: '100%',
                }}
              />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gray-muted)',
            }}>
              Message
            </label>
            <textarea
              name="message"
              required
              style={{
                resize: 'none',
                height: '120px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--gray-light)',
                padding: '10px 0',
                fontSize: '14px',
                color: 'var(--black)',
                outline: 'none',
                width: '100%',
                fontFamily: 'var(--sans)',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--black)',
              color: 'var(--white)',
              border: 'none',
              padding: '14px 28px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              width: 'fit-content',
              marginTop: '8px',
            }}
          >
            Send &rarr;
          </button>
        </form>
      </div>
    </div>
  )
}
