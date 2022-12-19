// 拷贝 fusion 组件

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const cwd = process.cwd();

/*
  button => Button
  date-picker => DatePicker
*/
const transferComponentName = comp => {
  if (comp.includes('-')) {
    return comp.split('-').map(c => c.replace(/^\S/, s => s.toUpperCase())).join('');
  } return comp.replace(/^\S/, s => s.toUpperCase())
}

const generateTsx = componentName => {
  return `
  import { ${componentName} as Next${componentName} } from '@alifd/next'

  export default Next${componentName};
    
  `
}

const nextPaths = glob.sync(path.join(cwd, '../next/src', '*'));
const components = nextPaths.map(p => p.split('/').pop());
components.forEach(comp => {
  const compPath = path.join(cwd, 'src', comp);
  // 删除原有文件夹
  fs.removeSync(compPath);
  // 生成文件夹
  fs.ensureDirSync(compPath);
  // 生成 index.tsx
  fs.writeFileSync(
    path.join(compPath, 'index.tsx'),
    generateTsx(transferComponentName(comp)));
})
