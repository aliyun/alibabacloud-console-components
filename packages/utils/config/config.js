module.exports = {
  presets: [
    [
      "@ali/breezr-preset-wind-component",
      {
        moduleName: "@ali/console-components-sdk",
        external: ["@ali/widget-loader"],
        globals: {
          "@ali/widget-loader": "widgetLoader",
          "@ali/console-components-sdk": "ConsoleComponentsSdk"
        },
        useTypescript: true
      }
    ]
  ]
};
