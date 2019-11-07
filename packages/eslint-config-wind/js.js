module.exports = {
  extends: ['eslint-config-ali/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
  },
  rules: {
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    semi: 0,
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'always' }],
    'react/jsx-indent-props': ['warn', 2],
  },
}
