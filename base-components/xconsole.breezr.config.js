const path = require('path')
module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-component',
      {
        moduleName: '@alicloud/console-components',
        useTypescript: true,
        disableStyleRemove: true,
        externals: ['moment'],
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'xconsole.js'
        }
      }
    ]
  ]
}
