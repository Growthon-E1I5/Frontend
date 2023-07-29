module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'react/function-component-definition': [
      0,
      { namedComponents: 'arrow-function' },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackage: false,
        pattern: { '*.css': 'always', '*.svg': 'always' },
      },
    ],
    'import/no-unresolved': 0,
    'no-restricted-exports': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    camelcase: 0,
    'no-inner-declarations': 0,
    'no-return-await': 0,
    'consistent-return': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', 'vite.config.ts'] },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'any',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['if'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'default-param-last': 'off',
    'import/newline-after-import': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/default-param-last': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
    'react/no-unknown-property': ['error', { ignore: ['charSet'] }],
    'no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
  },
};
