'use client'


import Link from 'next/link'
import Image from 'next/image'
import { essays, shorts } from '@/lib/data'

export default function Home() {
  const featured = essays.filter(e => e.featured).slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="hero-grid" style={{
        display: 'grid',
        minHeight: 'calc(100vh - var(--nav-h))',
        borderBottom: '1px solid var(--gray-light)',
      }}>
        <div style={{
          padding: '80px 60px 80px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: '1px solid var(--gray-light)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'var(--gray-muted)',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}>
              Film Critic &amp; Scholar &nbsp;/&nbsp; New York &nbsp;/&nbsp; New Delhi
            </p>

            <h1 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(42px, 5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              maxWidth: '520px',
            }}>
              There is no casual relationship with{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gray-muted)' }}> cinema.</em>
            </h1>

            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#555',
              maxWidth: '400px',
              marginTop: '40px',
            }}>
              Essays, criticism, and video work on film theory, spectatorship,
              and the politics of form. NYU Tisch Cinema Studies. MA candidate,
              University of Amsterdam.
            </p>

            <Link href="/writing" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '48px',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              borderBottom: '1px solid var(--black)',
              paddingBottom: '2px',
              color: 'var(--black)',
            }}>
              Read the writing &rarr;
            </Link>
          </div>

          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            color: 'var(--gray-muted)',
            letterSpacing: '0.08em',
          }}>
            <a
              href="https://boxd.it/2cCE7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--gray-muted)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Letterboxd
            </a>
            {' '}&mdash;{' '}Log updated regularly
          </div>
        </div>

        <div style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#d4cfc6',
          minHeight: '500px',
        }}>
          <Image
            src= "/hero.jpeg"
            alt="Krish Chopra"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%)' }}
            priority
          />
          <span style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: 'rgba(247,245,240,0.7)',
          }}>
            NYC, 2025
          </span>
        </div>
      </section>

      {/* Featured essays */}
      <section style={{ padding: '120px 40px', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--gray-light)',
          paddingBottom: '16px',
          marginBottom: '48px',
        }}>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: '28px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}>
            Recent Essays
          </h2>
          <Link href="/writing" style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: 'var(--gray-muted)',
          }}>
            All writing &rarr;
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {featured.map((essay, i) => (
            <a
              key={i}
              href={essay.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.015)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 120px',
                gap: '24px',
                alignItems: 'baseline',
                padding: '20px 0',
                borderBottom: i < featured.length - 1 ? '1px solid var(--gray-light)' : 'none',
                color: 'var(--black)',
                textDecoration: 'none',
              }}
            >
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--gray-muted)',
                letterSpacing: '0.05em',
              }}>
                {essay.date}
              </span>
              <span style={{ fontSize: '15px', lineHeight: 1.4 }}>
                {essay.title}
              </span>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                color: 'var(--gray-muted)',
                textAlign: 'right',
                textTransform: 'uppercase',
              }}>
                {essay.type}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Shorts */}
      <section style={{ borderTop: '1px solid var(--gray-light)' }}>
        <div style={{ padding: '80px 40px', maxWidth: 'var(--max)', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--gray-light)',
            paddingBottom: '16px',
            marginBottom: '48px',
          }}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}>
              Shorts &amp; Video Essays
            </h2>
            <Link href="/shorts" style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--gray-muted)',
            }}>
              All films &rarr;
            </Link>
          </div>

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
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
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
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}>
                  {short.title}
                </h3>
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
                    display: 'flex',
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
      </section>
      {/* Currently Reading */}
      <section style={{ borderTop: '1px solid var (--gray-light)' }}>
        <div style={{ padding: '80px 40px', maxWidth: 'var(--max)', margin: '0 auto'}}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--gray-light)',
            paddingBottom: '16px',
            marginBottom: '48px',
          }}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: '28px',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}>
              Currently Reading
            </h2>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px'}}>
          {[
            { title: 'The Book of Disquiet', author: 'Fernando Pessoa', type: 'Book' },
            { title: 'Phenomenology of Spirit', author: 'G.W.H. Hegel', tpye: 'Book' },
          ].map(({ title, author, type}, i) => (
            <div key={i} style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 120px',
              gap: '24px',
              alignItems: 'baseline',
              padding: '16px 0',
              borderBottom: '1px solid var(--gray-light)',
            }}>
              <div>
                <p style={{ fontSize: '15px', marginBottom: '4px' }}>{title}</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--gray-muted)' }}>{author}</p>
              </div>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                color: 'var(--gray-muted)',
                textAlign: 'right',
                textTransform: 'uppercase',
              }}>{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>  
    </>
  )
}
