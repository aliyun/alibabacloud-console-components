// push build artifacts to git remote(for example, github page)
// so it can be deployed

/* eslint-disable */
const path = require('path')
const fs = require('fs-extra')
const simpleGit = require('simple-git/promise')
const chalk = require('chalk')

require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
})

main(path.resolve(__dirname, '../public'))

async function main(buildDir) {
  checkBuildDir(buildDir)
  fs.removeSync(path.join(buildDir, '.git'))
  const gitClient = simpleGit(buildDir)
  await gitClient.init()
  if (await hasCommit(gitClient)) {
    throw new Error(`buildDir(${buildDir}) should not have commit`)
  }
  await gitClient.add('./*')
  await gitClient.commit('commit build artifacts')
  await gitClient.addRemote('origin', process.env['GIT_DEPLOY_REMOTE'])
  await gitClient.push(['-u', '-f', 'origin', 'master'])
  console.log(
    `${chalk.green.bold('Successfully')} push build artifacts to ${
      process.env['GIT_DEPLOY_REMOTE']
    }!`
  )
}

async function hasCommit(gitClient) {
  let hasCommit = true
  try {
    await gitClient.log()
  } catch (error) {
    if (
      error.message ===
      "fatal: your current branch 'master' does not have any commits yet\n"
    ) {
      hasCommit = false
    }
  }
  return hasCommit
}

function checkBuildDir(buildDir) {
  const dir = fs.readdirSync(buildDir)
  const htmlExist = fs.pathExistsSync(path.join(buildDir, 'index.html'))
  if (dir.length <= 20 || !htmlExist) {
    throw new Error(
      `checkBuildDir(${buildDir}) fail. build artifacts is not in it.`
    )
  }
}
