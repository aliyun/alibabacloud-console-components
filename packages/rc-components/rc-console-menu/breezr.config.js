module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindRcConsoleMenu',
        useTypescript: true,
        entry: './index.umd.js',
        externals: {
          '@alicloud/console-components': '@alicloud/console-components',
          dva: 'dva',
        },
      },
    ],
  ],
}
