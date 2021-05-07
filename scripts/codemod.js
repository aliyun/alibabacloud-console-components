// node ./scripts/codemod.js rc-actions

const fs = require('fs-extra')
const path = require('path')
const globby = require('globby')

const comp = process.argv[2]
const compDir = path.resolve(__dirname, '../packages', comp)

// modDemos()
modREADME()

function modDemos() {
  const demoDir = path.resolve(compDir, 'stories')
  const newDemoDir = path.resolve(compDir, 'demos')

  const demos = globby.sync('**/*.tsx', { cwd: demoDir })

  console.log('demos', demos)

  demos.forEach((demo) => {
    if (demo === 'index.stories.tsx') return
    const m = demo.match(/(.*)\.tsx?$/)
    if (!m) {
      return
    }
    const demoName = m[1]
    const demoPath = path.join(demoDir, demo)
    let code = fs.readFileSync(demoPath, 'utf-8')
    code = `/**
* @title ${demoName}
*/

${code}`
    const newDemoPath = path.join(newDemoDir, `${demoName}.demo.tsx`)
    fs.ensureFileSync(newDemoPath)
    fs.writeFileSync(newDemoPath, code)
  })
}

function modREADME() {
  let bareCompName = comp.replace(/^\.\//, '')
  bareCompName = bareCompName.replace(/^rc-/, '')
  const READMEPath = path.resolve(compDir, 'README.md')
  const consoleOSId = `console-components-${bareCompName}-docs`

  let md = fs.readFileSync(READMEPath, 'utf-8')

  md = md.replaceAll(
    /\[MDXInstruction:importDemo:(.*?)\]\((.*?)\)/g,
    (match, _, demoPath) => {
      const match1 = demoPath.match(/\.\/stories\/(.*?)\.tsx?/)
      if (!match1) throw new Error(`unexpected, ${match}`)
      return `[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=${consoleOSId}&entryKey=${match1[1]})`
    }
  )

  md = md.replaceAll(
    /\[MDXInstruction:renderInterface:(.*?)\]\((.*?)\)/g,
    (match, interfaceName, _) => {
      return `[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=${consoleOSId}&entryKey=types/${interfaceName})`
    }
  )

  fs.writeFileSync(READMEPath, md)
}
