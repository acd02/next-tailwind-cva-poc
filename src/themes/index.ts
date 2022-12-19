import type { Theme } from './types'

const defaultTheme: Theme = {
  colors: {
    main: {
      bg: 'white',
      text: '#1f2937',
    },
    primaries: {
      first: '#93c5fd',
      second: '#bfdbfe',
    },
    secondaries: {
      first: '#fdba74',
      second: '#fed7aa',
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

const defaultDarTheme: Theme = {
  colors: {
    main: {
      bg: '#1f2937',
      text: '#f9fafb',
    },

    primaries: {
      first: '#60A5FA',
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
    main: {
      bg: 'white',
      text: '#1f2937',
    },
    primaries: {
      first: '#4ade80',
      second: '#86efac',
    },
    secondaries: {
      first: '#c084fc',
      second: '#d8b4fe',
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

const themes = {
  default: defaultTheme,
  defaultDark: defaultDarTheme,
  other: otherTheme,
}

type ThemeValue = keyof typeof themes

export { themes }
export type { Theme, ThemeValue }
