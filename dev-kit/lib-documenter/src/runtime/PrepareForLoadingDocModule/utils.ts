export function loadExistModuleIntoImportMap(mapIdToModule) {
  const imports = {};

  Object.keys(mapIdToModule).forEach(id => {
    const moduleContent = mapIdToModule[id];
    // 实际上不会请求这个url，它只被作为模块的id
    const fakeURL = `https://test.taobao.com/${id}`;
    imports[id] = fakeURL;
    System.set(fakeURL, moduleContent);
  });

  mountImportMap({
    imports
  });
}

export function mountImportMap(importMap) {
  const im = document.createElement("script");
  im.type = "systemjs-importmap";
  im.textContent = JSON.stringify(importMap);
  document.head.appendChild(im);
}
