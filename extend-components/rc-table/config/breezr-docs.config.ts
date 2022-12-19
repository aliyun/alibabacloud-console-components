import type { IParams } from '@alicloud/console-toolkit-preset-docs'
import path from 'path'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-docs'),
      {
        consoleOSId: 'console-components-table-docs',
        externals: [
          {
            moduleName: '@alicloud/console-components-table',
            usePathInDev: path.resolve(__dirname, '../src/index'),
          },
          {
            moduleName: '@alicloud/console-components',
            usePathInDev: path.resolve(__dirname, './configedComponents.tsx'),
          },
          'styled-components',
        ],
        demoWrapperPath: path.resolve(__dirname, 'demoWrapper.tsx'),
        demoOptsPath: path.resolve(__dirname, 'demoOpts.ts'),
      } as IParams,
    ],
  ],
}
