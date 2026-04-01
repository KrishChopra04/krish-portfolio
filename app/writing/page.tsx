'use client'

import { useState } from 'react'
import { essays, EssayType } from '@/lib/data'

type Filter = 'All' | EssayType

const filters: Filter[] = ['All', 'Essay', 'Short Article', 'Personal']

export default function Writing() {
  const [active, setActive] = useState<Filter>('All')

  const visible = active === 'All'
    ? essays
    : essays.filter(e => e.type === active)

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
          Written Work
        </p>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'var(--black)',
        }}>
          Essays &amp; Criticism
        </h1>
      </div>

      <div style={{
        display: 'flex',
        gap: '2px',
        padding: '32px 40px',
        borderBottom: '1px solid var(--gray-light)',
      }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              padding: '8px 16px',
              background: active === f ? 'var(--black)' : 'none',
              border: `1px solid ${active === f ? 'var(--black)' : 'var(--gray-light)'}`,
              cursor: 'pointer',
              color: active === f ? 'var(--white)' : 'var(--gray-muted)',
              transition: 'all 0.15s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={{
        maxWidth: 'var(--max)',
        margin: '0 auto',
        padding: '0 40px 80px',
      }}>
        {visible.map((essay, i) => (
          <a
            key={i}
            href={essay.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr 140px',
              gap: '32px',
              alignItems: 'start',
              padding: '28px 0',
              borderBottom: '1px solid var(--gray-light)',
              color: 'var(--black)',
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--gray-muted)',
              letterSpacing: '0.05em',
              paddingTop: '3px',
            }}>
              {essay.date}
            </span>
            <span style={{ fontSize: '16px', lineHeight: 1.4 }}>
              {essay.title}
            </span>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'var(--gray-muted)',
              textAlign: 'right',
              textTransform: 'uppercase',
              paddingTop: '3px',
            }}>
              {essay.type}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}
