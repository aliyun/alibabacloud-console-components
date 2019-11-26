module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-official",
      {
        moduleName: "@alicloud/console-design-result",
        globals: {
          "@alicloud/console-design-result": "ConsoleResult"
        },
        useTypescript: true
      }
    ]
  ]
};
