module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: 'WindRcTable',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
