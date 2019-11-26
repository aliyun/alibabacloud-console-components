module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-official",
      {
        moduleName: "@alicloud/console-design-portal",
        globals: {
          "@alicloud/console-design-portal": "ConsolePortal"
        },
        useTypescript: true
      }
    ]
  ]
};
