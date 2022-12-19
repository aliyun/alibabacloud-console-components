const config = {
  // 请自己加入 wepback-merge 自定义
  // webpack: (config) => (webpack-merge(config, {}))
  analyze: true
}

module.exports = {
  presets: [['@alicloud/console-toolkit-preset-official', config]]
}
