"use strict";

var VirtualModulesPlugin = require("webpack-virtual-modules");

class WrapRequestPlugin {
  wrapRequest: any;

  constructor(wrapRequest) {
    if (typeof wrapRequest !== "function")
      throw new Error("wrapRequest should be a function");
    this.wrapRequest = wrapRequest;
  }

  apply(compiler) {
    this.initVirtualModules(compiler);

    const wrapRequest = this.wrapRequest;

    compiler.hooks.normalModuleFactory.tap("WrapRequestPlugin", nmf => {
      nmf.hooks.beforeResolve.tap("WrapRequestPlugin", result => {
        if (!result) return;
        wrapRequest(result, compiler._virtualModules_);
        return result;
      });
    });
  }

  initVirtualModules(compiler) {
    if (!compiler._virtualModules_) {
      compiler._virtualModules_ = new VirtualModulesPlugin();
      compiler._virtualModules_.apply(compiler);
    }
  }
}

module.exports = WrapRequestPlugin;
