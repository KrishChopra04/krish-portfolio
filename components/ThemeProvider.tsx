'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ dark: false, toggle: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(stored ? stored === 'dark' : prefers)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggle = () => {
    setDark(d => {
      localStorage.setItem('theme', !d ? 'dark' : 'light')
      return !d
    })
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
