import { objectEntries } from 'utils/object'

import type { Theme } from './types'

function flattenTheme(theme: Theme): Record<string, string> {
  const flattenedTheme: Record<string, string> = {}

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const pt = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, pt.replace(/-{3,}/, '--'))

        return
      }
      /* eslint-disable-next-line fp/no-mutation */
      if (typeof value === 'string') flattenedTheme[`${path}-${key}`] = value
    })
  }

  flatten(theme)

  return flattenedTheme
}

export { flattenTheme }
