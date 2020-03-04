(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{jDeJ:function(e,n,t){"use strict";t.r(n),t.d(n,"_demoSrcFiles",(function(){return s}));t("1c7q");var r=t("mXGw"),o=t.n(r),a=t("BgHK"),l=(t("nsRP"),{style:{width:300},subTitle:"SubTitle",extra:o.a.createElement(a.Icon,{size:"xs",type:"ellipsis-vertical"}),showTitleBullet:!1,showHeadDivider:!1});n.default=function(){return o.a.createElement(a.Grid.Row,null,o.a.createElement(a.Grid.Col,null,o.a.createElement(a.Card,Object.assign({},l,{title:"Simple Card"}),o.a.createElement("div",{className:"card-placeholder"}))),o.a.createElement(a.Grid.Col,null,o.a.createElement(a.Card,Object.assign({},l,{title:"Border Card",hasBorder:!0}),o.a.createElement("div",{className:"card-placeholder"}))))};var s={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo1";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo1.js":'import React from \'react\'\nimport { Card, Grid, Icon } from \'@alicloud/console-components\'\nimport \'./demo1.less\'\n\nconst commonProps = {\n  style: { width: 300 },\n  subTitle: \'SubTitle\',\n  extra: <Icon size="xs" type="ellipsis-vertical" />,\n  showTitleBullet: false,\n  showHeadDivider: false,\n}\n\nconst Demo1 = () => (\n  <Grid.Row>\n    <Grid.Col>\n      <Card {...commonProps} title="Simple Card">\n        <div className="card-placeholder" />\n      </Card>\n    </Grid.Col>\n    <Grid.Col>\n      <Card {...commonProps} title="Border Card" hasBorder>\n        <div className="card-placeholder" />\n      </Card>\n    </Grid.Col>\n  </Grid.Row>\n)\n\nexport default Demo1\n',"src/demo/demo1.less":".card-placeholder {\n    height: 500px;\n    text-align: center;\n    background: #F7F8FA;\n}","demoMeta.json":'{"entryPath":"src/demo/demo1.js"}'}}}]);
//# sourceMappingURL=41-4954ae40a60a8d5a4e22.js.map