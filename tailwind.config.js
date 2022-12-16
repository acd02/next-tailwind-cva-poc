/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'down-arrow': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
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
