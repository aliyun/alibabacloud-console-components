module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: 'WindRcAnnouncement',
        useTypescript: true,
        entry: './index.umd.js',
        externals: {
          '@alicloud/console-components': 'wind',
        },
      },
    ],
  ],
}
