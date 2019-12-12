const axios = require('axios')
const path = require('path')
const fs = require('fs')

const urls = [
  'http://unpkg.alipay.com/@alife/theme-test1234/variables.scss',
  'http://unpkg.alipay.com/@alife/theme-test1234/variables.less',
  'http://unpkg.alipay.com/@alife/theme-test1234/variables.js',
  'http://unpkg.alipay.com/@alife/theme-test1234/icons.scss',
]

const outDir = path.join(__dirname, '../', 'src', 'fetched-files')

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

urls.map(async url => {
  const fileName = path.basename(url)
  const response = await axios.get(url)
  const content = response.data

  const outPath = path.join(outDir, fileName)
  if (fs.existsSync(outPath)) {
    fs.unlinkSync(outPath)
  }
  // console.log(response.data)
  fs.writeFileSync(outPath, content)
  // return response
})
