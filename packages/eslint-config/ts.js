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
    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
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
    // https://stackoverflow.com/a/59268871
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#configuring-in-a-mixed-jsts-codebase
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, typedefs: false },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
      },
    },
  ],
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
