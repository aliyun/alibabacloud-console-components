(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{"6oHu":function(e,n,t){"use strict";t.r(n),t.d(n,"_demoSrcFiles",(function(){return s}));var i=t("mXGw"),o=t.n(i),m=t("BgHK"),r=(t("s89b"),m.Timeline.Item);n.default=function(){return o.a.createElement("div",{className:"timeline-demo4"},o.a.createElement(m.Timeline,null,o.a.createElement(r,{title:"Sign",state:"process",timeLeft:"2016-10-03"}),o.a.createElement(r,{title:"Ship",timeLeft:"2016-10-02"}),o.a.createElement(r,{title:"Order",timeLeft:"2016-10-01"})))};var s={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo4";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo4.js":'import React from \'react\'\nimport { Timeline } from \'@alicloud/console-components\'\nimport \'./demo4.less\'\nconst { Item: TimelineItem } = Timeline\n\nconst Demo4 = () => (\n  <div className="timeline-demo4">\n    <Timeline>\n      <TimelineItem title="Sign" state="process" timeLeft="2016-10-03" />\n      <TimelineItem title="Ship" timeLeft="2016-10-02" />\n      <TimelineItem title="Order" timeLeft="2016-10-01" />\n    </Timeline>\n  </div>\n)\n\nexport default Demo4\n',"src/demo/demo4.less":".timeline-demo4 .next-timeline-item-left-content p {\n  font-size: 12px;\n}","demoMeta.json":'{"entryPath":"src/demo/demo4.js"}'}}}]);
//# sourceMappingURL=337-3fe2751dfcfa428b588d.js.map