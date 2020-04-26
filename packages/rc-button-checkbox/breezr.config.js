module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: 'WindRcButtonCheckbox',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
