module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier/@typescript-eslint', // disables settings which conflict with prettier
    'plugin:prettier/recommended' // displays prettier errors as eslint errors (must be last)
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 'off', // disable prop-types since we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }]
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}
