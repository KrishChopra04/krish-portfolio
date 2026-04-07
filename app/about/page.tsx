const facts = [
  { label: 'Currently', value: 'New York, NY' },
  { label: 'From', value: 'New Delhi, India' },
  { label: 'Education', value: 'BA, NYU Tisch \u2014 Cinema Studies' },
  { label: 'Next', value: 'MA, University of Amsterdam \u2014 Film Studies' },
  { label: 'Letterboxd', value: 'boxd.it/2cCE7', href: 'https://boxd.it/2cCE7' },
  { label: 'Contact', value: 'krish.12chopra@gmail.com', href: 'mailto:krish.12chopra@gmail.com' },
  { label: 'CV', value: 'Download', href: '/krish_chopra_cv.pdf' },
]

export default function About() {
  return (
    <div style={{
      maxWidth: 'var(--max)',
      margin: '0 auto',
      padding: '80px 40px',
    }}>
      <p style={{
        fontFamily: 'var(--mono)',
        fontSize: '11px',
        letterSpacing: '0.12em',
        color: 'var(--gray-muted)',
        textTransform: 'uppercase',
        marginBottom: '32px',
      }}>
        About
      </p>

      <p style={{
        fontFamily: 'var(--serif)',
        fontSize: '20px',
        lineHeight: 1.4,
        color: 'var(--black)',
        marginBottom: '24px',
      }}>
        Film critic and Cinema Studies scholar finishing a BA at NYU Tisch,
        beginning an MA at the University of Amsterdam on a PhD track.
      </p>

      <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444', marginBottom: '20px' }}>
        I started writing about film at 17. The work has sharpened since then:
        less enthusiasm, more precision. The essays on this site span that arc.
        They are not finished, polished artifacts. They are a record of thinking
        in progress.
      </p>

      <p style={{ fontSize: '15px', lineHeight: 1.75, color: '#444', marginBottom: '0' }}>
        My interests span film theory, criticism, and the history of form — with a particular focus on spectatorship, apparatus theory, documentary ethics, and the ways cinema intersects with labor, race, and politics. Across the broad range of focus, the driving question remains the same: what does a film do, and why does it matter.
      </p>

      <div style={{ marginTop: '48px' }}>
        {facts.map(({ label, value, href }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              padding: '14px 0',
              borderBottom: '1px solid var(--gray-light)',
              fontSize: '13px',
            }}
          >
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: 'var(--gray-muted)',
              textTransform: 'uppercase',
            }}>
              {label}
            </span>
            {href ? (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  color: 'var(--black)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                {value}
              </a>
            ) : (
              <span style={{ color: 'var(--black)' }}>{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
