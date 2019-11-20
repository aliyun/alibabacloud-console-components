module.exports = {
  presets: [
    [
      '@breezr/preset-wind-component',
      {
        moduleName: 'WindInternalHelpers',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
