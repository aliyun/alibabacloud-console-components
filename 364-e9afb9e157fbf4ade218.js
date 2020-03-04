(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{KXRn:function(n,e,o){"use strict";o.r(e),o.d(e,"_demoSrcFiles",(function(){return c}));var a=o("mXGw"),t=o.n(a),l=o("BgHK");function r(n){console.log("beforeUpload callback : ",n)}function p(n){console.log("onChange callback : ",n)}e.default=function(){return t.a.createElement(l.Upload,{listType:"image",action:"//upload-server.alibaba.net/upload.do",accept:"image/png, image/jpg, image/jpeg, image/gif, image/bmp",beforeUpload:r,onChange:p,defaultValue:[{name:"IMG.png",state:"done",size:100,url:"https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"}]},t.a.createElement(l.Button,{type:"primary",style:{margin:"0 0 10px"}},"Upload File"))};var c={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo3";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo3.js":"import React from 'react'\nimport { Upload, Button } from '@alicloud/console-components'\n\nconst Demo3 = () => (\n  <Upload\n    listType=\"image\"\n    action=\"//upload-server.alibaba.net/upload.do\"\n    accept=\"image/png, image/jpg, image/jpeg, image/gif, image/bmp\"\n    beforeUpload={beforeUpload}\n    onChange={onChange}\n    defaultValue={[{\n      name: 'IMG.png',\n      state: 'done',\n      size: 100,\n      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',\n     }]}\n  >\n    <Button type=\"primary\" style={{margin: '0 0 10px'}}>Upload File</Button>\n  </Upload>\n)\n\nfunction beforeUpload(info) {\n  console.log('beforeUpload callback : ', info)\n}\n\nfunction onChange(info) {\n  console.log('onChange callback : ', info)\n}\n\nexport default Demo3","demoMeta.json":'{"entryPath":"src/demo/demo3.js"}'}}}]);
//# sourceMappingURL=364-e9afb9e157fbf4ade218.js.map