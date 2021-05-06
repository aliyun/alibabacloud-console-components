// node ./scripts/codemod.js rc-actions

const fs = require('fs-extra')
const path = require('path')

const comp = process.argv[2]
const compDir = path.resolve(__dirname, '../packages', comp)
let bareCompName = comp.replace(/^\.\//, '')
bareCompName = bareCompName.replace(/^rc-/, '')

const demoDir = path.resolve(compDir, 'demos')
const READMEPath = path.resolve(compDir, 'README.md')
const consoleOSId = `console-components-${bareCompName}-docs`

const demos = fs.readdirSync(demoDir)

// demos.forEach((demo) => {
//   const m = demo.match(/(.*)\.demo\.tsx?$/)
//   if (!m) {
//     return
//   }
//   const demoName = m[1]
//   const demoPath = path.join(demoDir, demo)
//   let code = fs.readFileSync(demoPath, 'utf-8')
//   code = `/**
// * @title ${demoName}
// */

// ${code}`
//   fs.writeFileSync(demoPath, code)
// })

let md = fs.readFileSync(READMEPath, 'utf-8')

md = md.replaceAll(
  /\[MDXInstruction:importDemo:(.*?)\]\((.*?)\)/g,
  (match, _, demoPath) => {
    console.log(match, _, demoPath)
    const match1 = demoPath.match(/\.\/stories\/(.*?)\.tsx?/)
    if (!match1) throw new Error(`unexpected, ${match}`)
    return `[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=${consoleOSId}&entryKey=${match1[1]})`
  }
)

fs.writeFileSync(READMEPath, md)
