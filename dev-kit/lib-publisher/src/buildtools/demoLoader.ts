export default async function (this: any, source: string) {
  // __demo_loader_placeholder__ 会被demoPlugin替换为收集到的demo信息
  return `${source};
  export const demoFiles = __demo_loader_placeholder__`
}
