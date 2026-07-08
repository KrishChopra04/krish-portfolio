import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Film critic and Cinema Studies scholar. BA, NYU Tisch; MA candidate, University of Amsterdam.',
}

const facts = [
  { label: 'Currently', value: 'New York, NY' },
  { label: 'From', value: 'New Delhi, India' },
  { label: 'Education', value: 'BA, NYU Tisch — Cinema Studies' },
  { label: 'Next', value: 'MA, University of Amsterdam — Film Studies' },
  { label: 'Letterboxd', value: 'boxd.it/2cCE7', href: 'https://boxd.it/2cCE7' },
  {
    label: 'Contact',
    value: 'krish.12chopra@gmail.com',
    href: 'mailto:krish.12chopra@gmail.com',
  },
  { label: 'CV', value: 'Download', href: '/krish_chopra_cv.pdf' },
]

export default function About() {
  return (
    <div className="container">
      <header className="page-head">
        <p className="label">About</p>
        <h1>Krish Chopra</h1>
      </header>

      <div className="section" style={{ paddingBlock: 'var(--s-16)' }}>
        <p className="lede">
          Film critic and Cinema Studies scholar finishing a BA at NYU Tisch,
          beginning an MA at the University of Amsterdam on a PhD track.
        </p>

        <div style={{ marginTop: 'var(--s-8)' }}>
          <p className="body-text">
            I started writing about film at 17. The work has sharpened since
            then: less enthusiasm, more precision. The essays on this site span
            that arc. They are not finished, polished artifacts. They are a
            record of thinking in progress.
          </p>

          <p className="body-text">
            My interests span film theory, criticism, and the history of form
            &mdash; with a particular focus on spectatorship, apparatus theory,
            documentary ethics, and the ways cinema intersects with labor,
            race, and politics. Across the broad range of focus, the driving
            question remains the same: what does a film do, and why does it
            matter.
          </p>
        </div>

        <div style={{ marginTop: 'var(--s-16)', maxWidth: '40rem' }}>
          {facts.map(({ label, value, href }) => (
            <div key={label} className="fact-row">
              <span className="label">{label}</span>
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
                <span>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
