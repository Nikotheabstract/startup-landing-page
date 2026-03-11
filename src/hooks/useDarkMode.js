import { useEffect, useMemo, useState } from 'react'

const THEME_KEY = 'theme'

const getInitialMode = () => {
  if (typeof window === 'undefined') {
    return 'system'
  }

  const saved = window.localStorage.getItem(THEME_KEY)
  return saved === 'light' || saved === 'dark' ? saved : 'system'
}

const getSystemPreference = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

export const useDarkMode = () => {
  const [mode, setMode] = useState(getInitialMode)
  const [prefersDark, setPrefersDark] = useState(getSystemPreference)

  const isDark = useMemo(
    () => mode === 'dark' || (mode === 'system' && prefersDark),
    [mode, prefersDark],
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      setPrefersDark(event.matches)
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    if (mode === 'system') {
      window.localStorage.removeItem(THEME_KEY)
      return
    }

    window.localStorage.setItem(THEME_KEY, mode)
  }, [mode])

  const toggleTheme = () => {
    if (mode === 'system') {
      setMode(prefersDark ? 'light' : 'dark')
      return
    }

    setMode((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { isDark, mode, setMode, toggleTheme }
}
