const axios = require('axios')
const path = require('path')
const fs = require('fs')

const urls = [
  'http://unpkg.alipay.com/@alife/theme-test1234/variables.scss',
  'http://unpkg.alipay.com/@alife/theme-test1234/variables.less',
  'http://unpkg.alipay.com/@alife/theme-test1234/variables.js',
  'http://unpkg.alipay.com/@alife/theme-test1234/icons.scss',
]

const outDir = path.join(__dirname, '../design-tokens')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

;(async function main() {
  await Promise.all(
    urls.map(async (url) => {
      const fileName = path.basename(url)
      const response = await axios.get(url)
      let content = response.data
      if (fileName === 'variables.scss') content = await processScss(content)

      const outPath = path.join(outDir, fileName)
      if (fs.existsSync(outPath)) {
        fs.unlinkSync(outPath)
      }
      fs.writeFileSync(outPath, content)
    })
  )
})()

async function processScss(content) {
  const reg = /^\$icon-font-path: "(.*?)";$/gm

  const match = content.match(reg)

  if (match.length !== 1) {
    throw new Error(`在scss文件中没有发现$icon-font-path变量`)
  }

  return content.replace(reg, '$icon-font-path: "$1" !default;')
}
