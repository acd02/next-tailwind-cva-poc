export type Theme = {
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  colors: {
    primaries: {
      first: string
      second: string
    }
    secondaries: {
      first: string
      second: string
    }
    nested: {
      one: {
        two: {
          three: {
            value: string
          }
        }
      }
    }
  }
}

export type ThemeValue = 'default' | 'other'
