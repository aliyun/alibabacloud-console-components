const linkBins = require('@pnpm/link-bins').default
const fs = require('fs-extra')

function warn(msg) {
  if (msg.endsWith('is already linked')) return
  console.warn(msg)
}

// const pkgs = ['rc-truncate', 'rc-page', 'rc-console-menu', 'rc-app-layout']

;(async () => {
  const pkgs = fs.readdirSync('./packages')
  // for (const name of pkgs) {
  //   await linkBins('node_modules', `packages/${name}/node_modules/.bin`, {
  //     warn,
  //   })
  // }

  await Promise.all(pkgs.map(linkWithRetry))

  console.log('link bins succes')
})()

async function linkWithRetry(name, trys = 5) {
  try {
    await link(name)
  } catch (error) {
    if (trys <= 0) throw error
    await timeout(500)
    await linkWithRetry(name, trys - 1)
  }
}

async function link(name) {
  return linkBins('node_modules', `packages/${name}/node_modules/.bin`, {
    warn,
  })
}

async function timeout(time) {
  return new Promise((res) => {
    setTimeout(res, time)
  })
}
