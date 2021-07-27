var fs = require('fs-extra')
var path = require('path')

var themes = {
  'hybridcloud-dark': require('../lib/theme/hybridcloud-dark'),
  'hybridcloud-light': require('../lib/theme/hybridcloud-light'),
  wind: require('../lib/theme/wind'),
  xconsole: require('../lib/theme/xconsole'),
  'xconsole-dark': require('../lib/theme/xconsole-dark'),
}

fs.ensureDirSync(path.join(__dirname, `../dist/vars`))
const version = fs.readJSONSync(path.join(__dirname, '../package.json')).version

Object.entries(themes).forEach(([themeName, theme]) => {
  const style = theme.theme.values()
  const code = `:root {
--console-menu-version: "${version}";
${Object.entries(style)
  .map(([propName, propValue]) => {
    return `${propName}: ${propValue};`
  })
  .join('\n')}
}
`
  const outPath = path.join(__dirname, `../dist/vars/${themeName}.css`)
  fs.writeFileSync(outPath, code, 'utf-8')
})
