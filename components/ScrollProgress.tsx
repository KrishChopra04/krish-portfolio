'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight
            const current = window.scrollY
            setProgress(total > 0 ? (current / total) * 100 : 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <div style={{
            position: 'fixed',
            top: 'var(--nav-h)',
            left: 0,
            width: "${progress}%",
            height: '2px',
            background: 'var(--black)',
            zIndex: 999,
            transition: 'width 0.1s ease',  
        }} />
    )
}
