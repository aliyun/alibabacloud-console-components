(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{Ynt4:function(e,n,t){"use strict";t.r(n),t.d(n,"_demoSrcFiles",(function(){return r}));var i=t("mXGw"),o=t.n(i),s=t("BgHK"),a=s.Timeline.Item,m=[{id:1,title:"【杭州市】已签收,签收人是阿里巴巴小邮局，感谢使用申通快递，期待再次为您服务",time:"2016-06-10 10:30:00",state:"process"},{id:2,title:"【杭州市】快件已到达 浙江杭州滨江公司",time:"2016-06-10 09:30:00",state:"done"},{id:3,title:"【杭州市】浙江杭州滨江公司派件员正在为您派件",time:"2016-06-10 09:03:00",state:"done"},{id:4,title:"【杭州市】浙江杭州转运中心 已发出",time:"2016-06-10 06:10:00",state:"done"},{id:5,title:"【东莞市】广东东莞转运中心 已发出",time:"2016-06-09 10:30:00",state:"done"},{id:6,title:"【东莞市】您的订单开始处理",time:"2016-06-09 10:30:00",state:"done"}].map((function(e){return o.a.createElement(a,{key:e.id,title:e.title,time:e.time,state:e.state})}));n.default=function(){return o.a.createElement("div",null,o.a.createElement(s.Timeline,null,m))};var r={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo1";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo1.js":"import React from 'react'\nimport { Timeline } from '@alicloud/console-components'\n\nconst { Item: TimelineItem } = Timeline\nconst dataSource = [\n  {id:1,title:'【杭州市】已签收,签收人是阿里巴巴小邮局，感谢使用申通快递，期待再次为您服务',time: '2016-06-10 10:30:00',state:'process'},\n  {id:2,title:'【杭州市】快件已到达 浙江杭州滨江公司',time: '2016-06-10 09:30:00',state:'done'},\n  {id:3,title:'【杭州市】浙江杭州滨江公司派件员正在为您派件',time: '2016-06-10 09:03:00',state:'done'},\n  {id:4,title:'【杭州市】浙江杭州转运中心 已发出',time: '2016-06-10 06:10:00',state:'done'},\n  {id:5,title:'【东莞市】广东东莞转运中心 已发出',time: '2016-06-09 10:30:00',state:'done'},\n  {id:6,title:'【东莞市】您的订单开始处理',time: '2016-06-09 10:30:00',state:'done'}\n]\nconst content = dataSource.map((item) => {\n  return (<TimelineItem key={item.id} title={item.title} time={item.time} state={item.state} />)\n})\n\nconst Demo1 = () => (\n  <div>\n    <Timeline>\n      {content}\n    </Timeline>\n  </div>\n)\n\nexport default Demo1\n","demoMeta.json":'{"entryPath":"src/demo/demo1.js"}'}}}]);
//# sourceMappingURL=334-769b73acb37c6678e352.js.map