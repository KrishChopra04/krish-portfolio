import type { Metadata } from 'next'
import Link from 'next/link'
import WritingList from '@/components/WritingList'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Essays and papers on film theory, spectatorship, and the politics of form.',
}

export default function Writing() {
  return (
    <div className="container">
      <header className="page-head">
        <p className="label">Written Work</p>
        <h1>Essays &amp; Papers</h1>
      </header>

      <WritingList />

      <Link href="screenplay" className="work-row">
        <span className="meta">Unpublished</span>
        <span className="work-row-title">Screenplay (request access)</span>
        <span className="label">Locked</span>
      </Link>
    </div>
  )
}
