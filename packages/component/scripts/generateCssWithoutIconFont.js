const fs = require('fs-extra')
const path = require('path')

const originalText = fs.readFileSync(
  path.resolve(__dirname, '../dist/wind.css'),
  'utf-8'
)

/*
匹配css中的以下声明：
@font-face {
  font-family: NextIcon
  src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot");
  src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff2") format("woff2"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff") format("woff"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.ttf") format("truetype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.svg#NextIcon") format("svg"); }
*/
const reg = /@font-face\s*{\s*font-family:\s*NextIcon;[\s\S]*?format\("svg"\);\s*}/g

const match = originalText.match(reg)

if (match.length !== 1) {
  throw new Error(`没有找到声明NextIcon的@font-face规则`)
}

const result = originalText.replace(reg, '')

fs.writeFileSync(
  path.resolve(__dirname, '../dist/wind-without-icon-font.css'),
  result,
  'utf-8'
)
