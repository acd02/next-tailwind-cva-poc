export type Theme = {
  spacing: {
    sm: string
    md: string
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
