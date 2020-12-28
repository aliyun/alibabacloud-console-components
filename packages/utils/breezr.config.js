module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindSDK',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': '@alicloud/console-components',
        },
      },
    ],
  ],
}
