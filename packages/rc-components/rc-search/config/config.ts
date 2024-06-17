module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-component",
      {
        moduleName: "@alicloud/console-components-search",
        useTypescript: true,
        disableUglify: true,
        externals: {
          "styled-components": "styled-components",
        },
      },
    ],
  ],
};
