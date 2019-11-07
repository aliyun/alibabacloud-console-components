module.exports = {
  presets: [
    [
      '@breezr/preset-wind-component',
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
