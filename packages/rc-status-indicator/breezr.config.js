module.exports = {
  presets: [
    [
      '@breezr/preset-wind-component',
      {
        moduleName: 'WindRcStatusIndicator',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
