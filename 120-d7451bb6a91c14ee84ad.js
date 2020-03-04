(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{L3qk:function(e,n,a){"use strict";a.r(n),a.d(n,"demoMeta",(function(){return d})),a.d(n,"_demoSrcFiles",(function(){return i}));a("1c7q");var t=a("mXGw"),l=a.n(t),r=a("BgHK"),s=r.Form.Item,o=r.Select.Option,m={labelCol:{span:4},wrapperCol:{span:20}};n.default=function(){var e=r.Field.useField(),n=e.getValue;return l.a.createElement("div",null,l.a.createElement(r.Form,Object.assign({},m,{field:e,size:n("size"),style:{maxWidth:"500px"}}),l.a.createElement(s,{label:"Size:"},l.a.createElement(r.Select,{name:"size",defaultValue:"medium",style:{width:"100%"}},l.a.createElement(o,{value:"small"},"small"),l.a.createElement(o,{value:"medium"},"medium"),l.a.createElement(o,{value:"large"},"large"))),l.a.createElement(s,{label:"Account:"},l.a.createElement(r.Input,{placeholder:"Please enter your user name",id:"userName",name:"userName"})),l.a.createElement(s,{required:!0,label:"Password:"},l.a.createElement(r.Input,{htmlType:"password",placeholder:"Please enter your password",id:"password",name:"password"})),l.a.createElement(s,{label:"Password:",validateState:"error"},l.a.createElement(r.Input,{htmlType:"password",placeholder:"Check your password",id:"rePass",name:"rePass"}))),l.a.createElement("h6",null,"水平方向"),l.a.createElement(r.Form,{size:n("size"),inline:!0,field:e},l.a.createElement(s,{label:"Size:"},l.a.createElement(r.Select,{style:{width:"100%"},name:"size"},l.a.createElement(o,{value:"small"},"small"),l.a.createElement(o,{value:"medium"},"medium"),l.a.createElement(o,{value:"large"},"large"))),l.a.createElement(s,{label:"Account:"},l.a.createElement(r.Input,{placeholder:"Please enter your user name",id:"userName2",name:"userName2"})),l.a.createElement(s,{label:"Password:"},l.a.createElement(r.Input,{htmlType:"password",placeholder:"Please enter your password",id:"password2",name:"password2"})),l.a.createElement(s,{label:"Password:",validateState:"error"},l.a.createElement(r.Input,{htmlType:"password",placeholder:"Check your password",id:"rePass2",name:"rePass2"}))))};var d={zhName:"尺寸",zhDesc:"`size` 会强制设置 `FormItem` 下的所有组件的size\n\n\t`labelAlign` label方位\n\t\n\t`labelTextAlign` 文字左右对齐方式"},i={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo3";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo3.js":'import React from \'react\'\nimport { Form, Input, Select, Field } from \'@alicloud/console-components\'\n\nconst FormItem = Form.Item\nconst { Option } = Select\nconst formItemLayout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n}\n\nconst Demo3 = () => {\n  const myfield = Field.useField()\n  const { getValue } = myfield\n  return (\n    <div>\n      <Form\n        {...formItemLayout}\n        field={myfield}\n        size={getValue(\'size\')}\n        style={{ maxWidth: \'500px\' }}\n      >\n        <FormItem label="Size:">\n          <Select name="size" defaultValue="medium" style={{ width: \'100%\' }}>\n            <Option value="small">small</Option>\n            <Option value="medium">medium</Option>\n            <Option value="large">large</Option>\n          </Select>\n        </FormItem>\n        <FormItem label="Account:">\n          <Input\n            placeholder="Please enter your user name"\n            id="userName"\n            name="userName"\n          />\n        </FormItem>\n        <FormItem required label="Password:">\n          <Input\n            htmlType="password"\n            placeholder="Please enter your password"\n            id="password"\n            name="password"\n          />\n        </FormItem>\n        <FormItem label="Password:" validateState="error">\n          <Input\n            htmlType="password"\n            placeholder="Check your password"\n            id="rePass"\n            name="rePass"\n          />\n        </FormItem>\n      </Form>\n      <h6>水平方向</h6>\n      <Form size={getValue(\'size\')} inline field={myfield}>\n        <FormItem label="Size:">\n          <Select style={{ width: \'100%\' }} name="size">\n            <Option value="small">small</Option>\n            <Option value="medium">medium</Option>\n            <Option value="large">large</Option>\n          </Select>\n        </FormItem>\n        <FormItem label="Account:">\n          <Input\n            placeholder="Please enter your user name"\n            id="userName2"\n            name="userName2"\n          />\n        </FormItem>\n        <FormItem label="Password:">\n          <Input\n            htmlType="password"\n            placeholder="Please enter your password"\n            id="password2"\n            name="password2"\n          />\n        </FormItem>\n        <FormItem label="Password:" validateState="error">\n          <Input\n            htmlType="password"\n            placeholder="Check your password"\n            id="rePass2"\n            name="rePass2"\n          />\n        </FormItem>\n      </Form>\n    </div>\n  )\n}\n\nexport default Demo3\n\nexport const demoMeta = {\n  zhName: \'尺寸\',\n  zhDesc: `\\`size\\` 会强制设置 \\`FormItem\\` 下的所有组件的size\n\n\t\\`labelAlign\\` label方位\n\t\n\t\\`labelTextAlign\\` 文字左右对齐方式`,\n}\n',"demoMeta.json":'{"entryPath":"src/demo/demo3.js"}'}}}]);
//# sourceMappingURL=120-d7451bb6a91c14ee84ad.js.map