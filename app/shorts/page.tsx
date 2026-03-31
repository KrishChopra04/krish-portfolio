import { shorts } from '@/lib/data'

export default function Shorts() {
  return (
    <>
      <div style={{
        padding: '80px 40px 48px',
        borderBottom: '1px solid var(--gray-light)',
      }}>
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          letterSpacing: '0.12em',
          color: 'var(--gray-muted)',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Film Work
        </p>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'var(--black)',
        }}>
          Shorts &amp; Video Essays
        </h1>
      </div>

      <div style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        padding: '48px 40px 80px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--gray-light)',
          border: '1px solid var(--gray-light)',
        }}>
          {shorts.map((short, i) => (
            <a
              key={i}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--white)',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                color: 'var(--black)',
                textDecoration: 'none',
              }}
            >
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                color: 'var(--gray-muted)',
                letterSpacing: '0.1em',
              }}>
                {short.year}
              </span>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: 1.2,
              }}>
                {short.title}
              </h2>
              <p style={{
                fontSize: '13px',
                color: 'var(--gray-muted)',
                lineHeight: 1.6,
              }}>
                {short.description}
              </p>
              <div style={{
                marginTop: 'auto',
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'var(--gray-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{
                  width: '20px',
                  height: '20px',
                  border: '1px solid var(--gray-light)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8px',
                }}>
                  &#9654;
                </span>
                Watch
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
