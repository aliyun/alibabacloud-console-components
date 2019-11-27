module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: 'WindRcTable',
        useTypescript: false,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
