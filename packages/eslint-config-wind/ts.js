module.exports = {
  // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    // 'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, typedefs: false },
    ],
  },
  settings: {
    // https://github.com/kriasoft/react-starter-kit/issues/1180#issuecomment-436753540
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    // https://stackoverflow.com/q/42377038
    browser: true,
  },
}
