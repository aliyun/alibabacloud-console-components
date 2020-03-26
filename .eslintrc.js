module.exports = {
  root: true,
  extends: ['@alicloud/eslint-config-console-components'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-plusplus': 'off',
    'react/static-property-placement': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
