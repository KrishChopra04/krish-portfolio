import type { Essay } from '@/lib/data'

export default function EssayRow({ essay }: { essay: Essay }) {
  return (
    <a
      href={essay.url}
      target="_blank"
      rel="noopener noreferrer"
      className="work-row"
    >
      <span className="meta">{essay.date}</span>
      <span className="work-row-title">{essay.title}</span>
      <span className="label">{essay.type}</span>
    </a>
  )
}
