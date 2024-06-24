const { spawnSync } = require('child_process');
const path = require('path');

const pkgs = spawnSync('pnpm', ['m', 'ls', '--json', '--depth=-1']).stdout.toString();

if (pkgs) {
  JSON.parse(pkgs).forEach((pkg) => {
    const nodeModulesPath = path.join(pkg.path, 'node_modules');

    console.log(`rm -rf ${nodeModulesPath}`);
    spawnSync('rm', ['-rf', nodeModulesPath]);
  });
}
