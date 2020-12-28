module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'WindAPIDocumenter',
        useTypescript: true,
        externals: {
          '@alicloud/console-components': '@alicloud/console-components',
        },
      },
    ],
  ],
}
