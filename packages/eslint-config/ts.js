module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // https://github.com/iamturns/eslint-config-airbnb-typescript#i-wish-this-config-would-support-
    'airbnb-typescript',
    'airbnb/hooks',
    // https://stackoverflow.com/a/56696478/8175856
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // config prettier: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
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
  env: {
    // https://stackoverflow.com/q/42377038
    browser: true,
  },
}
