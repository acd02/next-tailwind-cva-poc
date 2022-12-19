module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'fp',
    'simple-import-sort',
    'testing-library',
  ],
  extends: [
    'standard',
    'plugin:fp/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier',
  ],
  globals: {
    fetch: 'readonly',
  },
  ignorePatterns: ['out/', 'utils.js', '.next/', 'next.config.js', 'node_modules/'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Overwrite rules specified from the extended configs or add ones
    // Typescript
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      { functions: false, classes: true, variables: false },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    // React
    'jsx-quotes': [2, 'prefer-double'],
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'react/display-name': [0, { ignoreTranspilerName: false }],
    // testing library
    'testing-library/await-async-utils': 2,
    'testing-library/no-await-sync-events': 2,
    'testing-library/no-await-sync-query': 2,
    'testing-library/no-wait-for-empty-callback': 2,
    'testing-library/no-wait-for-multiple-assertions': 2,
    'testing-library/no-debugging-utils': 2,
    'testing-library/prefer-query-by-disappearance': 1,
    'testing-library/prefer-presence-queries': 1,
    'testing-library/prefer-find-by': 1,
    'testing-library/await-async-query': 1,
    'testing-library/await-fire-event': 1,
    'testing-library/prefer-screen-queries': 1,
    'testing-library/prefer-wait-for': 2,
    // fp
    'fp/no-mutation': [
      2,
      {
        exceptions: [
          { property: 'getInitialProps' },
          { property: 'current' },
          { property: 'getLayout' },
        ],
      },
    ],
    'fp/no-nil': 'off',
    'fp/no-unused-expression': 'off',
    'fp/no-rest-parameters': 'off',
    // import
    'import/no-absolute-path': 0,
    'import/exports-last': 2,
    // simple-import-sort
    'simple-import-sort/imports': 1,
    // Misc
    'array-callback-return': 0,
    complexity: [1, 5],
    curly: ['error', 'multi', 'consistent'],
    'max-lines': [1, { max: 150, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [1, { max: 100, skipBlankLines: true, skipComments: true }],
    'max-depth': [2, 2],
    'max-nested-callbacks': [1, 2],
    'newline-before-return': 2,
    'no-console': ['error', { allow: ['error'] }],
    'no-debugger': 2,
    'no-nested-ternary': 2,
    'no-shadow': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true }],
    'no-use-before-define': 0,
    'no-var': 2,
    quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
    'space-before-function-paren': [
      2,
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
  },
}
