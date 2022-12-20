import { appendFileSync } from 'fs'
import { join } from 'path'

import { themes } from './src/themes/index'
import type { Theme } from './src/themes/types'

function objectKeys<T extends Record<string | number, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

function objectEntries<T extends Record<string | number, unknown>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][]
}

/* eslint-disable-next-line @typescript-eslint/ban-types */
type FlattenedTheme = Record<'className' | (string & {}), string>

function flattenTheme(theme: Theme, className: string): FlattenedTheme {
  const flattenedTheme = {} as FlattenedTheme

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, formattedPath.replace(/-{3,}/, '--'))

        return
      }
      /* eslint-disable-next-line fp/no-mutation */
      if (typeof value === 'string') flattenedTheme[`${path}-${key}`] = value
    })
  }

  flatten(theme)

  return {
    ...flattenedTheme,
    className,
  }
}

function appendWriteFile(filename: string, data: string) {
  appendFileSync(join(__dirname, filename), data, {
    flag: 'w',
  })
}

const stringifiedTheme = (theme: Record<string, string>) =>
  Object.entries(theme)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')

const stringifiedThemes = objectKeys(themes).map(key => {
  const { className, ...rest } = flattenTheme(themes[key], key)

  return key === 'default'
    ? `:root{${stringifiedTheme(rest)}}`
    : `.${className}{${stringifiedTheme(rest)}}`
})

appendWriteFile(
  './src/css/tailwind.css',
  `
  /* purgecss start ignore */
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  /* purgecss end ignore */

  @import 'tailwindcss/utilities';

  @layer base {${stringifiedThemes.join('')}}
`
)
