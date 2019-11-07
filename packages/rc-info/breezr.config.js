module.exports = {
  presets: [
    [
      '@breezr/preset-wind-component',
      {
        moduleName: 'WindRcInfo',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
