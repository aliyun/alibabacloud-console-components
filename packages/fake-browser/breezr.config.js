module.exports = {
  presets: [
    [
      '@breezr/preset-wind-component',
      {
        moduleName: 'WindFakeBrowser',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
