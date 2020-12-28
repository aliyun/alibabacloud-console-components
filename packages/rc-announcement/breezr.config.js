module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindRcAnnouncement',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': '@alicloud/console-components',
        },
      },
    ],
  ],
}
