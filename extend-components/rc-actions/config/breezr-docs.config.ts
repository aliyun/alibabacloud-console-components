import type { IParams } from '@alicloud/console-toolkit-preset-docs'
import path from 'path'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-docs'),
      {
        consoleOSId: 'console-components-actions-docs',
        externals: [
          {
            moduleName: '@alicloud/console-components-actions',
            usePathInDev: path.resolve(__dirname, '../src/index.ts'),
          },
          {
            moduleName: '@alicloud/console-components',
            usePathInDev: path.resolve(
              __dirname,
              './components-with-style.tsx'
            ),
          },
          'styled-components',
        ],
      } as IParams,
    ],
  ],
}
