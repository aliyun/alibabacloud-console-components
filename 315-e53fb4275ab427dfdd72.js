(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{JEWm:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c})),t.d(n,"demoMeta",(function(){return d})),t.d(n,"_demoSrcFiles",(function(){return m}));var o=t("mXGw"),a=t.n(o),i=t("BgHK");function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var r=function(e,n){for(var t=[],o=e;o<n;o++)t.push({title:{name:"Quotation for 1PCS Nano "+(3+e)+".0 controller compatible"},id:100306660940+o,time:2e3+o});return t},s=function(e,n,t){return a.a.createElement("a",null,"Remove(",t.id,")")},c=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).state={rowSelection:{onChange:t.onChange.bind(l(t)),onSelect:function(e,n,t){console.log("onSelect",e,n,t)},onSelectAll:function(e,n){console.log("onSelectAll",e,n)},selectedRowKeys:[],getProps:function(e){return{disabled:100306660941===e.id}}},dataSource:r(0,5)},t}t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var c=o.prototype;return c.onChange=function(e,n){var t=this.state.rowSelection;t.selectedRowKeys=e,console.log("onChange",e,n),this.setState({rowSelection:t})},c.clear=function(){var e=this.state.rowSelection;e.selectedRowKeys=[],this.setState({rowSelection:e})},c.toggleLoading=function(){this.setState({loading:!this.state.loading})},c.changeMode=function(){var e=this.state.rowSelection,n=e.mode,t=e.selectedRowKeys;e.mode="single"===n?"multiple":"single",e.selectedRowKeys=1===t.length?t:[],this.setState({rowSelection:e})},c.modifyDataSource=function(){this.setState({dataSource:r(9,14)})},c.render=function(){return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement(i.Button,{onClick:this.clear.bind(this)},"Clear Selection")," ",a.a.createElement(i.Button,{onClick:this.changeMode.bind(this)},"Switch single mode")," ",a.a.createElement(i.Button,{onClick:this.toggleLoading.bind(this)},"Toggle loading")," ",a.a.createElement(i.Button,{onClick:this.modifyDataSource.bind(this)},"Modify dataSource")),a.a.createElement(i.Table,{dataSource:this.state.dataSource,loading:this.state.loading,rowSelection:this.state.rowSelection},a.a.createElement(i.Table.Column,{title:"Id",dataIndex:"id"}),a.a.createElement(i.Table.Column,{title:"Title",dataIndex:"title.name"}),a.a.createElement(i.Table.Column,{title:"Time",dataIndex:"time"}),a.a.createElement(i.Table.Column,{cell:s,width:200})))},o}(a.a.Component),d={zhName:"可选择",zhDesc:"演示全选和单选受控的功能"},m={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo3";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo3.js":"import React, { Component } from 'react'\nimport { Table, Button } from '@alicloud/console-components'\n\nconst dataSource = (i, j) => {\n  const result = []\n  for (let a = i; a < j; a++) {\n    result.push({\n      title: {\n        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,\n      },\n      id: 100306660940 + a,\n      time: 2000 + a,\n    })\n  }\n  return result\n}\nconst render = (value, index, record) => {\n  return <a>Remove({record.id})</a>\n}\n\nexport default class Demo3 extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      rowSelection: {\n        onChange: this.onChange.bind(this),\n        onSelect(selected, record, records) {\n          console.log('onSelect', selected, record, records)\n        },\n        onSelectAll(selected, records) {\n          console.log('onSelectAll', selected, records)\n        },\n        selectedRowKeys: [],\n        getProps: record => {\n          return {\n            disabled: record.id === 100306660941,\n          }\n        },\n      },\n      dataSource: dataSource(0, 5),\n    }\n  }\n\n  onChange(ids, records) {\n    const { rowSelection } = this.state\n    rowSelection.selectedRowKeys = ids\n    console.log('onChange', ids, records)\n    this.setState({ rowSelection })\n  }\n\n  clear() {\n    const { rowSelection } = this.state\n    rowSelection.selectedRowKeys = []\n    this.setState({ rowSelection })\n  }\n\n  toggleLoading() {\n    this.setState({ loading: !this.state.loading })\n  }\n\n  changeMode() {\n    const { rowSelection } = this.state\n    const { mode } = rowSelection\n    const { selectedRowKeys } = rowSelection\n    rowSelection.mode = mode === 'single' ? 'multiple' : 'single'\n    rowSelection.selectedRowKeys =\n      selectedRowKeys.length === 1 ? selectedRowKeys : []\n    this.setState({ rowSelection })\n  }\n\n  modifyDataSource() {\n    this.setState({\n      dataSource: dataSource(9, 14),\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          <Button onClick={this.clear.bind(this)}>Clear Selection</Button>&nbsp;\n          <Button onClick={this.changeMode.bind(this)}>\n            Switch single mode\n          </Button>\n          &nbsp;\n          <Button onClick={this.toggleLoading.bind(this)}>\n            Toggle loading\n          </Button>\n          &nbsp;\n          <Button onClick={this.modifyDataSource.bind(this)}>\n            Modify dataSource\n          </Button>\n        </p>\n        <Table\n          dataSource={this.state.dataSource}\n          loading={this.state.loading}\n          rowSelection={this.state.rowSelection}\n        >\n          <Table.Column title=\"Id\" dataIndex=\"id\" />\n          <Table.Column title=\"Title\" dataIndex=\"title.name\" />\n          <Table.Column title=\"Time\" dataIndex=\"time\" />\n          <Table.Column cell={render} width={200} />\n        </Table>\n      </div>\n    )\n  }\n}\n\nexport const demoMeta = {\n  zhName: `可选择`,\n  zhDesc: `演示全选和单选受控的功能`,\n}\n","demoMeta.json":'{"entryPath":"src/demo/demo3.js"}'}}}]);
//# sourceMappingURL=315-e53fb4275ab427dfdd72.js.map