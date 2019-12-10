module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: 'WindRcConsoleMenu',
        useTypescript: true,
        entry: './index.umd.js',
        externals: {
          '@alicloud/console-components': 'wind',
          dva: 'dva',
        },
      },
    ],
  ],
}
