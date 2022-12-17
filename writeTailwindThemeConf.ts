import { writeFileSync } from 'fs'
import { join } from 'path'

import { themes } from './src/themes/index'
import type { Theme } from './src/themes/types'

function objectEntries<T extends Record<string | number, unknown>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}

function toTailwindConfig(theme: Theme): Theme {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme))

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, formattedPath.replace(/-{3,}/, '--'))
        return
      }

      /* eslint-disable */
      if (typeof value === 'string') {
        /* @ts-ignore */
        obj[key as any] = `var(${path}-${key})`
      /* eslint-enable */
      }
    })
  }

  flatten(themeCpy)

  return themeCpy
}

function syncWriteFile(filename: string, data: string) {
  writeFileSync(join(__dirname, filename), data, {
    flag: 'w',
  })
}

syncWriteFile(
  './tailwind.theme.conf.js',
  `module.exports = ${JSON.stringify(toTailwindConfig(themes.default))} `
)
