import type { IParams } from "@alicloud/console-toolkit-preset-docs";
import path from "path";

module.exports = {
  presets: [
    [
      require.resolve("@alicloud/console-toolkit-preset-docs"),
      {
        consoleOSId: "console-fe-test-rc-components-pro",
        externals: [
          {
            moduleName: "@alicloud/console-components-pro",
            usePathInDev: path.resolve(__dirname, "../src/index.tsx"),
          },
          {
            moduleName: '@alicloud/console-components',
            usePathInDev: path.resolve(
              __dirname,
              './components-with-style.tsx'
            ),
          },
          "styled-components",
        ],
        demoOptsPath: path.resolve(__dirname, "./demoOpts"),
      } as IParams,
    ],
  ],
};
