export type Theme = {
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  colors: {
    main: {
      bg: string
      text: string
    }
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
