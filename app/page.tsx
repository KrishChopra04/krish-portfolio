import Link from 'next/link'
import Image from 'next/image'
import { essays, shorts } from '@/lib/data'
import EssayRow from '@/components/EssayRow'

const reading = [
  { title: 'Carnal Thoughts', author: 'Vivian Sobchack', type: 'Book' },
  { title: 'Phenomenology of Spirit', author: 'G.W.H. Hegel', type: 'Book' },
]

export default function Home() {
  const featured = essays.filter(e => e.featured).slice(0, 6)
  const latest = essays[0]

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <div>
            <p className="label" style={{ marginBottom: 'var(--s-3)' }}>
              Film Critic &amp; Scholar / New York / New Delhi / Amsterdam
            </p>
            <p className="meta" style={{ marginBottom: 'var(--s-12)' }}>
              New:{' '}
              <a
                href={latest.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {latest.title}
              </a>
            </p>

            <h1 className="display" style={{ maxWidth: '11em' }}>
              There is no casual relationship with{' '}
              <em className="muted">cinema.</em>
            </h1>

            <p
              className="meta"
              style={{ maxWidth: '26rem', marginTop: 'var(--s-8)' }}
            >
              Essays, criticism, and video work on film theory, spectatorship,
              and the politics of form. BA, NYU Tisch Cinema Studies. Incoming MA,
              University of Amsterdam.
            </p>

            <Link
              href="/writing"
              className="arrow-link"
              style={{ marginTop: 'var(--s-12)' }}
            >
              Read the writing &rarr;
            </Link>
          </div>

          <p className="meta" style={{ fontSize: 'var(--text-label)', letterSpacing: '0.06em' }}>
            <a
              href="https://boxd.it/2cCE7"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Letterboxd
            </a>{' '}
            &mdash; Log updated regularly
          </p>
        </div>

        <div className="hero-image">
          <Image
            src="/hero.jpeg"
            alt="Krish Chopra"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <span className="hero-caption">NYC, 2025</span>
        </div>
      </section>

      {/* Recent essays */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Recent Essays</h2>
            <Link href="/writing" className="quiet-link">
              All writing &rarr;
            </Link>
          </div>

          <div className="work-list">
            {featured.map(essay => (
              <EssayRow key={essay.url} essay={essay} />
            ))}
          </div>
        </div>
      </section>

      {/* Shorts */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Shorts &amp; Video Essays</h2>
            <Link href="/shorts" className="quiet-link">
              All films &rarr;
            </Link>
          </div>

          <div className="film-grid">
            {shorts.map(short => (
              <a
                key={short.youtubeId}
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
                className="film-card"
              >
                <img
                  src={`https://i.ytimg.com/vi/${short.youtubeId}/hqdefault.jpg`}
                  alt={`Still from ${short.title}`}
                  loading="lazy"
                />
                <span className="meta">{short.year}</span>
                <h3>{short.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Currently reading */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Currently Reading</h2>
          </div>

          {reading.map(({ title, author, type }) => (
            <div key={title} className="work-row">
              <span className="meta">{author}</span>
              <span className="work-row-title">{title}</span>
              <span className="label">{type}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
