module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindRcInfo',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': '@alicloud/console-components',
        },
      },
    ],
  ],
}
