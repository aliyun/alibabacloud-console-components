(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{SL5P:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i})),t.d(e,"_demoSrcFiles",(function(){return c}));var a=t("mXGw"),o=t.n(a),r=t("BgHK");var l=r.Radio.Group,s=[{value:"apple",label:"苹果"},{value:"pear",label:"梨"},{value:"orange",label:"橙子"}],i=function(n){var e,t;function a(e){var t;return(t=n.call(this,e)||this).state={value:"orange"},t.onChange=t.onChange.bind(function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)),t}t=n,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var r=a.prototype;return r.onChange=function(n){this.setState({value:n})},r.render=function(){return o.a.createElement("div",null,o.a.createElement("h6",null,"受限组件"),"normal: ",o.a.createElement(l,{dataSource:s,value:this.state.value,onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement("br",null),"disabled: ",o.a.createElement(l,{disabled:!0,dataSource:s,value:this.state.value,onChange:this.onChange}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h6",null,"非受限组件"),o.a.createElement(l,{dataSource:s,defaultValue:"apple"}))},a}(a.Component),c={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo3";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo3.js":"import React, { Component } from 'react'\nimport { Radio } from '@alicloud/console-components'\n\nconst { Group: RadioGroup } = Radio\n\nconst list = [\n  {\n    value: 'apple',\n    label: '苹果'\n  }, \n  {\n    value: 'pear',\n    label: '梨'\n  }, \n  {\n    value: 'orange',\n    label: '橙子'\n  }\n]\nexport default class RadioDemo3 extends Component {\n  constructor(props){\n    super(props)\n    this.state = {\n      value: 'orange'\n    }\n    this.onChange = this.onChange.bind(this)\n  }\n\n  onChange(value){\n    this.setState({\n      value: value\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <h6>受限组件</h6>\n        normal: <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />\n        <br />\n        <br />\n        disabled: <RadioGroup disabled dataSource={list} value={this.state.value} onChange={this.onChange} />\n        <br />\n        <br />\n        <h6>非受限组件</h6>\n        <RadioGroup dataSource={list} defaultValue={'apple'} />\n      </div>\n    )\n  }\n\n}\n","demoMeta.json":'{"entryPath":"src/demo/demo3.js"}'}}}]);
//# sourceMappingURL=215-08c63a58f1e6fac4019f.js.map