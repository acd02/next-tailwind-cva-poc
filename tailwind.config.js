/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      spacing: {
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
      },
      colors: {
        primaries: {
          first: 'var(--colors-primaries-first)',
          second: 'var(--colors-primaries-second)',
        },
        secondaries: {
          first: 'var(--colors-secondaries-first)',
          second: 'var(--colors-secondaries-second)',
        },
        nested: {
          one: {
            two: {
              three: {
                value: 'var(--colors-nested-one-two-three-value)',
              },
            },
          },
        },
      },
    },
  },
  content: [
    './src/components/**/*.ts',
    './src/components/**/*.tsx',
    './src/pages/**/*.ts',
    './src/pages/**/*.tsx',
    './src/pagesContent/**/*.ts',
    './src/pagesContent/**/*.tsx',
  ],
}
