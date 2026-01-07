import { useRouter } from '@tanstack/react-router'
import { createContext, use, useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { T as Theme } from '@/lib/theme'
import { setThemeServerFn } from '@/lib/theme'

type ThemeContextVal = { theme: Theme; setTheme: (val: Theme) => void }
type Props = PropsWithChildren<{ theme: Theme }>

const ThemeContext = createContext<ThemeContextVal | null>(null)

export function ThemeProvider({ children, theme: initialTheme }: Props) {
  const router = useRouter()
  const [theme, setThemeState] = useState<Theme>(initialTheme)

  useEffect(() => {
    setThemeState(initialTheme)
  }, [initialTheme])

  useEffect(() => {
    const root = document.documentElement

    // Always remove existing theme classes including 'system' if it was applied by SSR
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)')

      const applySystemTheme = () => {
        root.classList.remove('light', 'dark')
        root.classList.add(media.matches ? 'dark' : 'light')
      }

      applySystemTheme()

      media.addEventListener('change', applySystemTheme)
      return () => media.removeEventListener('change', applySystemTheme)
    }

    root.classList.add(theme)
  }, [theme])

  function setTheme(val: Theme) {
    setThemeState(val)
    setThemeServerFn({ data: val }).then(() => router.invalidate())
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const val = use(ThemeContext)
  if (!val) throw new Error('useTheme called outside of ThemeProvider!')
  return val
}
