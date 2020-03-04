(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RrzS:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s})),t.d(e,"_demoSrcFiles",(function(){return c}));var r=t("mXGw"),o=t.n(r),a=t("BgHK");t("PNV/");var s=function(n){var e,t;function r(){return n.apply(this,arguments)||this}t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var s=r.prototype;return s._containerRefHandler=function(n){this.container=n},s.render=function(){var n=this;return o.a.createElement("div",{className:"custom-affix-container",ref:this._containerRefHandler.bind(this)},o.a.createElement("div",{className:"a-wrapper"},o.a.createElement(a.Affix,{container:function(){return n.container},offsetTop:0},o.a.createElement(a.Button,{type:"secondary"},"Affixed Button"))))},r}(o.a.Component),c={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo3";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo3.js":"import React from 'react'\nimport { Affix, Button } from '@alicloud/console-components'\nimport './demo3.less'\n\nexport default class Demo3 extends React.Component {\n\n  _containerRefHandler(ref) {\n    this.container = ref\n  }\n\n  render() {\n    return (\n      <div className=\"custom-affix-container\" ref={this._containerRefHandler.bind(this)}>\n        <div className=\"a-wrapper\">\n          <Affix container={() => this.container} offsetTop={0}>\n            <Button type=\"secondary\">Affixed Button</Button>\n          </Affix>\n        </div>\n      </div>\n    )\n  }\n}\n\n","src/demo/demo3.less":".custom-affix-container {\n    height: 150px;\n    overflow-y: scroll;\n    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg) repeat 50% 50%;\n}\n\n.custom-affix-container .a-wrapper {\n    padding-top: 50px;\n    height: 500px;\n}","demoMeta.json":'{"entryPath":"src/demo/demo3.js"}'}}}]);
//# sourceMappingURL=13-6077020055d0644c466f.js.map