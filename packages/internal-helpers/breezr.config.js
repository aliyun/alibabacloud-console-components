module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindInternalHelpers',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': '@alicloud/console-components',
        },
      },
    ],
  ],
}
