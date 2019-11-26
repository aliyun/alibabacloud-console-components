module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-official",
      {
        moduleName: "@alicloud/console-design-description",
        globals: {
          "@alicloud/console-design-description": "ConsoleDescription"
        },
        useTypescript: true
      }
    ]
  ]
};
