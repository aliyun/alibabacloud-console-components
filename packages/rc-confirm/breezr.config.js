module.exports = {
  presets: [
    [
      '@breezr/preset-wind-component',
      {
        moduleName: 'WindRcConfirm',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
