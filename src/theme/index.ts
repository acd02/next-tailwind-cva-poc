import { objectKeys } from 'utils/object'

import type { Theme, ThemeValue } from './types'
import { flattenTheme } from './utils'

const defaultTheme: Theme = {
  colors: {
    primaries: {
      first: '#3b82f6',
      second: '#6366f1',
    },
    secondaries: {
      first: '#f97316',
      second: '#f59e0b',
    },
    nested: {
      one: {
        two: {
          three: {
            value: '#f43f5e',
          },
        },
      },
    },
  },
  spacing: {
    sm: '8px',
    md: '24px',
  },
}

const otherTheme: Theme = {
  colors: {
    primaries: {
      first: '#059669',
      second: '#0d9488',
    },
    secondaries: {
      first: '#4338ca',
      second: '#7e22ce',
    },
    nested: {
      one: {
        two: {
          three: {
            value: '#f43f5e',
          },
        },
      },
    },
  },
  spacing: {
    sm: '18px',
    md: '64px',
  },
}

const themes: Record<ThemeValue, Theme> = {
  default: defaultTheme,
  other: otherTheme,
}

function applyTheme(theme: keyof typeof themes) {
  const themeObject = flattenTheme(themes[theme])
  const root = document.documentElement

  objectKeys(themeObject).forEach(property => {
    if (property === 'name') return

    root.style.setProperty(property, themeObject[property] as string)
  })
}

export { applyTheme }
export type { Theme, ThemeValue }
