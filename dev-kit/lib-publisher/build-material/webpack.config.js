const createCoreConfig = require("./webpack-chain").createConfig;

module.exports.createConfig = ({ umdName } = {}) => {
  if (typeof umdName !== "string") throw new Error("invalid umdName");

  const configSystemJS = createCoreConfig();
  configSystemJS.output.libraryTarget("system").filename("[name].system.js");

  const configUMD = createCoreConfig();
  configUMD.output
    .library(umdName)
    .libraryTarget("umd")
    .filename("[name].js");

  return [configSystemJS.toConfig(), configUMD.toConfig()];
};
