module.exports = {
  plugins: [
    [
      '@alicloud/console-toolkit-plugin-docs',
      {
        inputs: {
          component1: './components/component1/README.mdx',
          component2: './components/component2/README.mdx',
          README: './README.md',
        },
        externals: ['@alicloud/cc-demo-multi-components'],
      },
    ],
  ],
}
