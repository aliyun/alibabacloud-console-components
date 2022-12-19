const fs = require('fs-extra')
const path = require('path')

const filePath = path.resolve(
  path.dirname(require.resolve('@alife/theme-xconsole-v4')),
  'dist/next-noreset.var.css'
)

let content = fs.readFileSync(filePath, 'utf8')

// 删掉几行暂时有bug的样式
content = content
  .replace('right: -calc(32px / 2);', '')
  .replace('right: -calc(var(--step-arrow-item-height, 32px) / 2);', '')
  .replace(
    'padding: 0 var(--message-size-l-title-content-padding-right, 16px) 0 var(--message-size-l-title-content-padding-left, 8px)var(--message-size-l-icon, 16px)',
    'padding: 0 var(--message-size-l-title-content-padding-right, 16px) 0 calc(var(--message-size-l-title-content-padding-left, 8px) + var(--message-size-l-icon, 16px))'
  )
  .replace(
    'padding: 0 var(--message-size-l-title-content-padding-right, 16px) 0 var(--message-size-l-title-content-padding-left, 8px)var(--message-size-l-icon, 16px)',
    'padding: 0 var(--message-size-l-title-content-padding-right, 16px) 0 calc(var(--message-size-l-title-content-padding-left, 8px) + var(--message-size-l-icon, 16px))'
  )
// .replace(
//   'margin-left: var(--tree-switch-size, 16px) - var(--tree-line-width, 1px) / 2;',
//   ''
// )
// .replace(
//   'margin-right: var(--tree-switch-size, 16px) - var(--tree-line-width, 1px) / 2;',
//   ''
// )
// .replace(
//   'padding-left: 24px - var(--tree-line-width, 1px) - var(--tree-switch-size, 16px) - var(--tree-line-width, 1px) / 2;',
//   ''
// )
// .replace(
//   'padding-right: 24px - var(--tree-line-width, 1px) - var(--tree-switch-size, 16px) - var(--tree-line-width, 1px) / 2;',
//   ''
// )
// .replace(/\n([^\n])*\$icon-reset([^\n])*\n/g, '')
// .replace(
//   'right: -calc(var(--step-arrow-item-height, 32px) / 2);',
//   'right: calc(0px - calc(var(--step-arrow-item-height, 32px) / 2));'
// )
// .replace(
//   'right: -calc(var(--step-arrow-item-height, 32px) / 2);',
//   'right: calc(0px - calc(var(--step-arrow-item-height, 32px) / 2));'
// )
// .replace('margin-right: -var(--menu-padding-horizontal, 16px)8px/2;', '')
// .replace(
//   'margin-right: calc(-var(--menu-padding-horizontal, 16px)8px/2 - (16px - 8px) / 2);',
//   ''
// )

fs.writeFileSync(filePath, content)
