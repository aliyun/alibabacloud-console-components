(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"19l3":function(e,n,a){"use strict";a.r(n),a.d(n,"_demoSrcFiles",(function(){return l}));var t=a("mXGw"),o=a.n(t),r=a("BgHK");a("TZAl");n.default=function(){return o.a.createElement("div",{className:"badge-demo1-container"},o.a.createElement("h3",null,"小图标"),o.a.createElement("br",null),o.a.createElement(r.Badge,{dot:!0},o.a.createElement(r.Icon,{type:"email",size:"xs"})),o.a.createElement("h3",null,"大图标"),o.a.createElement("br",null),o.a.createElement(r.Badge,{dot:!0},o.a.createElement(r.Icon,{type:"email"})),o.a.createElement("h3",null,"链接"),o.a.createElement("br",null),o.a.createElement(r.Badge,{dot:!0},o.a.createElement("a",{href:"#"},"这是一个链接")),o.a.createElement(r.Badge,{dot:!0},o.a.createElement("a",{href:"#"},o.a.createElement(r.Icon,{type:"atm"}))),o.a.createElement("h3",null,"大数字"),o.a.createElement("br",null),o.a.createElement(r.Badge,{count:100},o.a.createElement("a",{href:"#",className:"head-example"})),o.a.createElement(r.Badge,{count:200,overflowCount:199},o.a.createElement("a",{href:"#",className:"head-example"})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h3",null,"独立使用"),o.a.createElement(r.Badge,{count:25}),o.a.createElement(r.Badge,{count:4,style:{backgroundColor:"#fff",color:"#73777A",border:"1px solid #C3C5C6"}}),o.a.createElement(r.Badge,{count:109,style:{backgroundColor:"#06B624"}}),o.a.createElement(r.Badge,{dot:!0}),o.a.createElement(r.Badge,{content:"hot",style:{backgroundColor:"#f54743",color:"#fff"}}))};var l={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo1";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo1.js":'import React from \'react\'\nimport { Badge, Icon } from \'@alicloud/console-components\'\nimport \'./demo1.less\'\n\nconst Demo1 = () => (\n  <div className="badge-demo1-container">\n    <h3>小图标</h3>\n    <br />\n    <Badge dot>\n      <Icon type="email" size="xs" />\n    </Badge>\n    \n    <h3>大图标</h3>\n    <br />\n    <Badge dot>\n      <Icon type="email" />\n    </Badge>\n  \n    <h3>链接</h3>\n    <br />\n    <Badge dot>\n      <a href="#">这是一个链接</a>\n    </Badge>\n    <Badge dot>\n      <a href="#"><Icon type="atm" /></a>\n    </Badge>\n    \n\n    <h3>大数字</h3>\n    <br />\n    <Badge count={100}>\n      <a href="#" className="head-example"></a>\n    </Badge>\n    <Badge count={200} overflowCount={199}>\n      <a href="#" className="head-example"></a>\n    </Badge>\n      <br /><br />\n\n    <h3>独立使用</h3>\n  \n    <Badge count={25} />\n    <Badge count={4} style={{backgroundColor: \'#fff\', color: \'#73777A\', border: \'1px solid #C3C5C6\'}} />\n    <Badge count={109} style={{backgroundColor: \'#06B624\'}} />\n    <Badge dot />\n    <Badge content="hot" style={{backgroundColor: \'#f54743\', color: \'#fff\'}} />\n  </div>\n)\n\nexport default Demo1\n',"src/demo/demo1.less":".badge-demo1-container {\n  .next-badge {\n    margin-right: 30px;\n  }\n  .head-example {\n    display: inline-block;\n    width: 42px;\n    height: 42px;\n    line-height: 42px;\n    background: #eee;\n  }\n}\n","demoMeta.json":'{"entryPath":"src/demo/demo1.js"}'}}}]);
//# sourceMappingURL=17-50ec4ed6a526b3dc7638.js.map