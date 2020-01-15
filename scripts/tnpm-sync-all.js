const path = require('path')
const { spawnSync, spawn } = require('child_process')

// 对所有非private包调用tnpm sync，同步到内网registery

;(async () => {
  const rootDir = path.resolve(__dirname, '../')

  const { stdout } = spawnSync('lerna', ['list'], { cwd: rootDir })

  const pkgs = stdout
    .toString()
    .split('\n')
    .filter(Boolean)

  console.log(`start sync ${pkgs.length} pkgs...`)

  const result = await Promise.all(
    pkgs.map(async pkgName => {
      return new Promise((res, rej) => {
        const child = spawn('tnpm', ['sync', pkgName])
        child.on('close', code => {
          res({ pkgName, code })
        })
      })
    })
  )

  const errPkgs = result
    .filter(({ code }) => code !== 0)
    .map(({ pkgName }) => pkgName)
  if (errPkgs.length > 0)
    console.error(`${errPkgs} errPkgs:
    ${errPkgs.join('\n')}
  `)
  else console.log(`all ${result.length} pkg sync successfully!`)
})()
