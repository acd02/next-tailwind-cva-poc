import type { Theme, ThemeValue } from './types'

const defaultTheme: Theme = {
  colors: {
    primaries: {
      first: '#3b82f6',
      second: '#60a5fa',
    },
    secondaries: {
      first: '#f97316',
      second: '#fb923c',
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
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.1rem',
    xl: '1.2rem',
  },
}

const otherTheme: Theme = {
  colors: {
    primaries: {
      first: '#22c55e',
      second: '#4ade80',
    },
    secondaries: {
      first: '#8b5cf6',
      second: '#a78bfa',
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
    xs: '0.625rem',
    sm: '0.875rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.75rem',
  },
}

const themes: Record<ThemeValue, Theme> = {
  default: defaultTheme,
  other: otherTheme,
}

export { themes }
export type { Theme, ThemeValue }
