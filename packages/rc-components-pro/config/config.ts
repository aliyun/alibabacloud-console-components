module.exports = {
  presets: [
    [
      "@alicloud/console-toolkit-preset-component",
      {
        moduleName: "@alicloud/console-components-pro",
        useTypescript: true,
        externals: {
          "styled-components": "styled-components",
        },
      },
    ],
  ],
};
