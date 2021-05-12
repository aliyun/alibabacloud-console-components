var fs = require('fs-extra')
var path = require('path')

var themes = {
  'hybridcloud-dark': require('../lib/theme/hybridcloud-dark'),
  'hybridcloud-light': require('../lib/theme/hybridcloud-light'),
  wind: require('../lib/theme/wind'),
  xconsole: require('../lib/theme/xconsole'),
}

fs.ensureDirSync(path.join(__dirname, `../dist/vars`))

Object.entries(themes).forEach(([themeName, theme]) => {
  const style = theme.theme.values()
  const code = `:root {
${Object.entries(style)
  .map(([propName, propValue]) => {
    return `${propName}: ${propValue}`
  })
  .join(';\n')}
}
`
  const outPath = path.join(__dirname, `../dist/vars/${themeName}.css`)
  fs.writeFileSync(outPath, code, 'utf-8')
})
