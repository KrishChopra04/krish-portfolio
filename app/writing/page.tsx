import type { Metadata } from 'next'
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
    </div>
  )
}
