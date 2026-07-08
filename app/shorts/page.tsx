import type { Metadata } from 'next'
import { shorts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Shorts',
  description: 'Short films and video essays by Krish Chopra.',
}

export default function Shorts() {
  return (
    <div className="container">
      <header className="page-head">
        <p className="label">Film Work</p>
        <h1>Shorts &amp; Video Essays</h1>
      </header>

      {shorts.map(short => (
        <article key={short.youtubeId} className="film-feature">
          <div className="video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${short.youtubeId}`}
              title={short.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="film-feature-meta">
            <div>
              <h2>{short.title}</h2>
              <p className="meta" style={{ marginTop: 'var(--s-2)', maxWidth: '40rem' }}>
                {short.description}
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p className="meta">{short.year}</p>
              <a
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link link"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
