import { PluginAPI } from '@alicloud/console-toolkit-core'
import {
  build,
  extractApi,
} from '@alicloud/console-components-build-doc/lib/runner'
import type { IBuildArgs } from '@alicloud/console-components-build-doc/lib/runner'

export default (api: PluginAPI, config: IBuildArgs['config']) => {
  const { cwd } = api.service
  api.registerCommand(
    'docs',
    {
      description: '文档构建',
      options: {
        '--config': '配置文件路径',
      },
      usage: '',
    },
    (args: any) => {
      if (args.build) {
        build({
          config,
          cwd,
          ...args,
        })
      } else if (args['extract-api']) {
        extractApi({ cwd })
      } else if (args.dev) {
        // TODO
      }

      // if (args)
    }
  )
}
