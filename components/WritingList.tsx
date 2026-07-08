'use client'

import { useState } from 'react'
import { essays, EssayType } from '@/lib/data'
import EssayRow from '@/components/EssayRow'

type Filter = 'All' | EssayType

const filters: Filter[] = ['All', 'Essay', 'Short Article', 'Personal']

export default function WritingList() {
  const [active, setActive] = useState<Filter>('All')
  const [newest, setNewest] = useState(true)

  const filtered =
    active === 'All' ? essays : essays.filter(e => e.type === active)
  const sorted = newest ? filtered : [...filtered].reverse()

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          paddingBlock: 'var(--s-6)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="filter-btn"
            aria-pressed={active === f}
          >
            {f}
          </button>
        ))}
        <button
          onClick={() => setNewest(!newest)}
          className="filter-btn"
          style={{ marginLeft: 'auto', marginRight: 0 }}
        >
          {newest ? 'Oldest first' : 'Newest first'}
        </button>
      </div>

      <p
        className="meta"
        style={{ fontSize: 'var(--text-label)', letterSpacing: '0.04em', paddingBlock: 'var(--s-4)' }}
      >
        All PDFs are reproduced copies formatted for this site and are not
        facsimiles of the original submissions.
      </p>

      <div className="work-list" style={{ paddingBottom: 'var(--s-24)' }}>
        {sorted.map(essay => (
          <EssayRow key={essay.url} essay={essay} />
        ))}
      </div>
    </>
  )
}
