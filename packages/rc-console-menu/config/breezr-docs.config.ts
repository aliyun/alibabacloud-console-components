import type { IParams } from '@alicloud/console-toolkit-preset-docs'
import path from 'path'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-docs'),
      {
        consoleOSId: 'console-components-console-menu-docs',
        externals: [
          {
            moduleName: '@alicloud/console-components-console-menu',
            usePathInDev: path.resolve(__dirname, '../src/index.ts'),
          },
          {
            moduleName: '@alicloud/console-components-console-menu/RoutableMenu',
            usePathInDev: path.resolve(__dirname, '../src/RoutableMenu.tsx'),
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
