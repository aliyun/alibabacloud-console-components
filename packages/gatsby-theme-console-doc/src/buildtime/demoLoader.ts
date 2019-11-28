export default function(this: any, source: string) {
  // debugger
  if (this.query && this.query.bundleDemo === false) {
    return `export default null;
    export const _demoInfo = __demo_loader_placeholder__`
  }
  return `${source};
  export const _demoInfo = __demo_loader_placeholder__`
}
