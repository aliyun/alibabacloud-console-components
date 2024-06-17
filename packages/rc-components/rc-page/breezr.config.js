module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindRcPage',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': {
            root: 'wind',
            commonjs2: '@alicloud/console-components',
            commonjs: '@alicloud/console-components',
            amd: '@alicloud/console-components'
          },
        },
      },
    ],
  ],
}
