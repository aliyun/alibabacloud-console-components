module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: 'AliCloudComponents',
        useTypescript: true,
        disableStyleRemove: true,
        externals: ['moment'],
        webpack(config) {
          config.entry['index-with-locale'] = './index-with-locale'
          return config
        }
      }
    ]
  ]
}
