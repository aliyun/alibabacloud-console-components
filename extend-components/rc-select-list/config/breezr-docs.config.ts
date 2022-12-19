import type { IParams } from '@alicloud/console-toolkit-preset-docs'
import path from 'path'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-docs'),
      {
        consoleOSId: 'console-components-select-list-docs',
        externals: [
          {
            moduleName: '@alicloud/console-components-select-list',
            usePathInDev: path.resolve(__dirname, '../src/index.tsx'),
          },
          {
            moduleName: '@alicloud/console-components-select-list/list',
            usePathInDev: path.resolve(__dirname, '../src/list.tsx'),
          },
          {
            moduleName: '@alicloud/console-components',
            usePathInDev: path.resolve(__dirname, './configedComponents.tsx'),
          },
          'styled-components',
        ],
        demoWrapperPath: path.resolve(__dirname, 'demoWrapper.tsx'),
      } as IParams,
    ],
  ],
}
