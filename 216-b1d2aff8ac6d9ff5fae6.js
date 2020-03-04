(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{"lc/q":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i})),a.d(n,"_demoSrcFiles",(function(){return d}));var t=a("mXGw"),l=a.n(t),o=a("BgHK");var r=o.Radio.Group,s=[{value:"apple",label:"Apple",disabled:!1},{value:"pear",label:"Pear"},{value:"orange",label:"Orange",disabled:!0}],i=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).onNormalChange=function(e){a.setState({value1:e})},a.onNestChange=function(e){a.setState({value2:e})},a.state={value1:"apple",value2:""},a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Small size"),l.a.createElement(r,{dataSource:s,shape:"button",size:"small",value:this.state.value1,onChange:this.onNormalChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Medium size (default)"),l.a.createElement(r,{dataSource:s,shape:"button",size:"medium",value:this.state.value1,onChange:this.onNormalChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Large size"),l.a.createElement(r,{shape:"button",size:"large",value:this.state.value2,onChange:this.onNestChange},l.a.createElement(o.Radio,{id:"banana",value:"banana"},"Banana"),l.a.createElement(o.Radio,{id:"watermelon",value:"watermelon"},"Watermelon"),l.a.createElement(o.Radio,{id:"peach",value:"peach"},"Peach")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Disabled and Selected-Disabled status"),l.a.createElement(r,{shape:"button",value:"banana",onChange:this.onNestChange},l.a.createElement(o.Radio,{id:"peach",disabled:!0,value:"peach"},"Peach"),l.a.createElement(o.Radio,{id:"banana",disabled:!0,value:"banana"},"Banana")))},t}(t.Component),d={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo4";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo4.js":'import React, { Component } from \'react\'\nimport { Radio } from \'@alicloud/console-components\'\n\nconst RadioGroup = Radio.Group;\n\nconst list = [\n  {\n    value: \'apple\',\n    label: \'Apple\',\n    disabled: false\n  }, {\n    value: \'pear\',\n    label: \'Pear\'\n  }, {\n    value: \'orange\',\n    label: \'Orange\',\n    disabled: true\n  }\n]\n\nexport default class RadioDemo4 extends Component {\n\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      value1: \'apple\',\n      value2: \'\'\n    }\n  }\n\n  onNormalChange = (value) => {\n    this.setState({\n      value1: value\n    })\n  }\n\n  onNestChange = (value) => {\n    this.setState({\n      value2: value\n    })\n  }\n\n\n  render() {\n    return (\n      <div>\n        <h4>Small size</h4>\n        <RadioGroup dataSource={list} shape="button" size="small" value={this.state.value1} onChange={this.onNormalChange} />\n        <br/>\n        <br/>\n        <h4>Medium size (default)</h4>\n        <RadioGroup dataSource={list} shape="button" size="medium" value={this.state.value1} onChange={this.onNormalChange} />\n        <br/>\n        <br/>\n        <h4>Large size</h4>\n        <RadioGroup shape="button" size="large" value={this.state.value2} onChange={this.onNestChange}>\n          <Radio id="banana" value="banana">Banana</Radio>\n          <Radio id="watermelon" value="watermelon">Watermelon</Radio>\n          <Radio id="peach" value="peach">Peach</Radio>\n        </RadioGroup>\n        <br/>\n        <br/>\n        <h4>Disabled and Selected-Disabled status</h4>\n        <RadioGroup shape="button" value="banana" onChange={this.onNestChange}>\n          <Radio id="peach" disabled value="peach">Peach</Radio>\n          <Radio id="banana" disabled value="banana">Banana</Radio>\n        </RadioGroup>\n      </div>\n    )\n  }\n}\n',"demoMeta.json":'{"entryPath":"src/demo/demo4.js"}'}}}]);
//# sourceMappingURL=216-b1d2aff8ac6d9ff5fae6.js.map