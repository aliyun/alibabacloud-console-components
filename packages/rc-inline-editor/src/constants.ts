import XRegExp from 'xregexp'

// 名字的规则
export const NAME_XREGEXP: RegExp = XRegExp(
  '^[a-zA-Z\\p{L}][a-zA-Z0-9_\\p{L}\\-]*?$'
)
// 描述的规则
export const DESC_XREGEXP: RegExp = XRegExp('^(?!(http(s)?://)).*$')

