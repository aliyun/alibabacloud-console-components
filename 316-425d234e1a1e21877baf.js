(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{"6+p9":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s})),t.d(n,"demoMeta",(function(){return d})),t.d(n,"_demoSrcFiles",(function(){return c}));t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("kBzq");var a=t("mXGw"),l=t.n(a),o=t("BgHK");var r=function(){for(var e=[],n=0;n<5;n++)e.push({title:"Quotation for 1PCS Nano "+(3+n)+".0 controller compatible",id:100306660940+n,time:2e3+n});return e},i=function(e,n,t){return l.a.createElement("a",{href:"javascript:;"},"Remove(",t.id,")")},s=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).state={dataSource:r(),filterMode:"multiple"},t}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var s=a.prototype;return s.onSort=function(e,n){var t=this.state.dataSource.sort((function(t,a){var l=t[e]-a[e];return"asc"===n?l>0?1:-1:l>0?-1:1}));this.setState({dataSource:t,sort:{id:n}})},s.onFilter=function(e){var n=r();Object.keys(e).forEach((function(t){var a=e[t].selectedKeys;a.length&&(n=n.filter((function(e){return a.some((function(n){return e[t].indexOf(n)>-1}))})))})),this.setState({dataSource:n})},s.changeMode=function(){this.setState({filterMode:"single"})},s.render=function(){var e=[{label:"Nano 3",value:3},{label:"Nano 678",value:678,children:[{label:"Nano 67",value:67,children:[{label:"Nano 6",value:6},{label:"Nano 7",value:7}]},{label:"Nano 8",value:8}]},{label:"Other",value:"other",children:[{label:"Nano 4",value:4},{label:"Nano 5",value:5}]}];return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(o.Button,{onClick:this.changeMode.bind(this)},"Change filter menu to single select")),l.a.createElement(o.Table,{dataSource:this.state.dataSource,onSort:this.onSort.bind(this),onFilter:this.onFilter.bind(this)},l.a.createElement(o.Table.Column,{title:"Id",dataIndex:"id",sortable:!0}),l.a.createElement(o.Table.Column,{title:"Title",dataIndex:"title",filters:e,filterMode:this.state.filterMode}),l.a.createElement(o.Table.Column,{title:"Time",dataIndex:"time"}),l.a.createElement(o.Table.Column,{cell:i,width:200})),l.a.createElement("br",null),"Customize sortIcons:",l.a.createElement("br",null),l.a.createElement(o.Table,{dataSource:[],onSort:function(){},sortIcons:{desc:l.a.createElement(o.Icon,{style:{top:"6px",left:"4px"},type:"arrow-down",size:"small"}),asc:l.a.createElement(o.Icon,{style:{top:"-6px",left:"4px"},type:"arrow-up",size:"small"})}},l.a.createElement(o.Table.Column,{title:"Id",dataIndex:"id",sortable:!0}),l.a.createElement(o.Table.Column,{title:"Title",dataIndex:"title",filters:e,filterMode:this.state.filterMode}),l.a.createElement(o.Table.Column,{title:"Time",dataIndex:"time"})))},a}(l.a.Component),d={zhName:"排序与过滤",zhDesc:"示例演示了排序和过滤的特性"},c={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo4";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo4.js":"import React from 'react'\nimport { Table, Button, Icon } from '@alicloud/console-components'\n\nconst dataSource = () => {\n  const result = []\n  for (let i = 0; i < 5; i++) {\n    result.push({\n      title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,\n      id: 100306660940 + i,\n      time: 2000 + i,\n    })\n  }\n  return result\n}\nconst render = (value, index, record) => {\n  return <a href=\"javascript:;\">Remove({record.id})</a>\n}\n\nexport default class App extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      dataSource: dataSource(),\n      filterMode: 'multiple',\n    }\n  }\n\n  onSort(dataIndex, order) {\n    const dataSource = this.state.dataSource.sort(function(a, b) {\n      const result = a[dataIndex] - b[dataIndex]\n      return order === 'asc' ? (result > 0 ? 1 : -1) : result > 0 ? -1 : 1\n    })\n    this.setState({\n      dataSource,\n      sort: { id: order },\n    })\n  }\n\n  onFilter(filterParams) {\n    let ds = dataSource()\n    Object.keys(filterParams).forEach(key => {\n      const { selectedKeys } = filterParams[key]\n      if (selectedKeys.length) {\n        ds = ds.filter(record => {\n          return selectedKeys.some(value => {\n            return record[key].indexOf(value) > -1\n          })\n        })\n      }\n    })\n    this.setState({ dataSource: ds })\n  }\n\n  changeMode() {\n    this.setState({\n      filterMode: 'single',\n    })\n  }\n\n  render() {\n    const filters = [\n      {\n        label: 'Nano 3',\n        value: 3,\n      },\n      {\n        label: 'Nano 678',\n        value: 678,\n        children: [\n          {\n            label: 'Nano 67',\n            value: 67,\n            children: [\n              {\n                label: 'Nano 6',\n                value: 6,\n              },\n              {\n                label: 'Nano 7',\n                value: 7,\n              },\n            ],\n          },\n          {\n            label: 'Nano 8',\n            value: 8,\n          },\n        ],\n      },\n      {\n        label: 'Other',\n        value: 'other',\n        children: [\n          {\n            label: 'Nano 4',\n            value: 4,\n          },\n          {\n            label: 'Nano 5',\n            value: 5,\n          },\n        ],\n      },\n    ]\n    return (\n      <div>\n        <p>\n          <Button onClick={this.changeMode.bind(this)}>\n            Change filter menu to single select\n          </Button>\n        </p>\n        <Table\n          dataSource={this.state.dataSource}\n          onSort={this.onSort.bind(this)}\n          onFilter={this.onFilter.bind(this)}\n        >\n          <Table.Column title=\"Id\" dataIndex=\"id\" sortable />\n          <Table.Column\n            title=\"Title\"\n            dataIndex=\"title\"\n            filters={filters}\n            filterMode={this.state.filterMode}\n          />\n          <Table.Column title=\"Time\" dataIndex=\"time\" />\n          <Table.Column cell={render} width={200} />\n        </Table>\n        <br />\n        Customize sortIcons:\n        <br />\n        <Table\n          dataSource={[]}\n          onSort={() => {}}\n          sortIcons={{\n            desc: (\n              <Icon\n                style={{ top: '6px', left: '4px' }}\n                type=\"arrow-down\"\n                size=\"small\"\n              />\n            ),\n            asc: (\n              <Icon\n                style={{ top: '-6px', left: '4px' }}\n                type=\"arrow-up\"\n                size=\"small\"\n              />\n            ),\n          }}\n        >\n          <Table.Column title=\"Id\" dataIndex=\"id\" sortable />\n          <Table.Column\n            title=\"Title\"\n            dataIndex=\"title\"\n            filters={filters}\n            filterMode={this.state.filterMode}\n          />\n          <Table.Column title=\"Time\" dataIndex=\"time\" />\n        </Table>\n      </div>\n    )\n  }\n}\n\nexport const demoMeta = {\n  zhName: `排序与过滤`,\n  zhDesc: `示例演示了排序和过滤的特性`,\n}\n","demoMeta.json":'{"entryPath":"src/demo/demo4.js"}'}}}]);
//# sourceMappingURL=316-425d234e1a1e21877baf.js.map