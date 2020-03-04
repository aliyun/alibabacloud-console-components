(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{"2g/o":function(e,n,t){"use strict";t.r(n),t.d(n,"_demoSrcFiles",(function(){return d}));var l=t("mXGw"),a=t.n(l),s=t("BgHK"),c=t("UutA");var i=s.Menu.SubMenu,o=s.Menu.Item,h=c.default.div.withConfig({displayName:"demo-select__Wrapper",componentId:"sc-1r8363m-0"})([".my-switch-label{vertical-align:super;}.my-select-menu{margin-top:10px;width:200px;}"]),r=function(e){var n,t;function l(n){var t;return(t=e.call(this,n)||this).state={multiple:!1,subMenuSelectable:!1,shallowSelect:!1,isSelectIconRight:!1,selectedKeys:["1"]},["handleMultipleChange","handleSubMenuSelectableChange","handleShallowSelectChange","handleSelect","handleIconDirectionChange"].forEach((function(e){t[e]=t[e].bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t))})),t}t=e,(n=l).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var c=l.prototype;return c.handleMultipleChange=function(){this.setState({multiple:!this.state.multiple,selectedKeys:[]})},c.handleIconDirectionChange=function(){this.setState({isSelectIconRight:!this.state.isSelectIconRight,selectedKeys:[]})},c.handleSubMenuSelectableChange=function(){this.setState({subMenuSelectable:!this.state.subMenuSelectable,selectedKeys:[]})},c.handleShallowSelectChange=function(){this.setState({shallowSelect:!this.state.shallowSelect,selectedKeys:[]})},c.handleSelect=function(e){var n;this.setState({selectedKeys:e});for(var t=arguments.length,l=new Array(t>1?t-1:0),a=1;a<t;a++)l[a-1]=arguments[a];(n=console).log.apply(n,[e].concat(l))},c.render=function(){var e=this.state,n=e.multiple,t=e.subMenuSelectable,l=e.shallowSelect,c=e.selectedKeys,r=e.isSelectIconRight,d=n?"multiple":"single";return a.a.createElement(h,null,a.a.createElement("div",null,a.a.createElement("span",{className:"my-switch-label"},"Multiple "),a.a.createElement(s.Switch,{value:n,onChange:this.handleMultipleChange})),a.a.createElement("div",null,a.a.createElement("span",{className:"my-switch-label"},"isSelectIconRight "),a.a.createElement(s.Switch,{value:n,onChange:this.handleIconDirectionChange})),a.a.createElement("div",null,a.a.createElement("span",{className:"my-switch-label"},"Label of submenu selectable "),a.a.createElement(s.Switch,{value:n,onChange:this.handleSubMenuSelectableChange})),a.a.createElement("div",null,a.a.createElement("span",{className:"my-switch-label"},"Only first level selectable "),a.a.createElement(s.Switch,{value:n,onChange:this.handleShallowSelectChange})),a.a.createElement(s.Menu,{isSelectIconRight:r,className:"my-select-menu",defaultOpenKeys:["sub"],selectMode:d,selectedKeys:c,shallowSelect:l,onSelect:this.handleSelect},a.a.createElement(o,{key:"1"},"Option 1"),a.a.createElement(o,{disabled:!0,key:"2"},"Disabled option 2"),a.a.createElement(i,{key:"sub",label:"Sub menu",selectable:t},a.a.createElement(o,{key:"sub-1"},"Sub option 1"),a.a.createElement(o,{key:"sub-2"},"Sub option 2")),a.a.createElement(o,{key:"3"},"Option 3")))},l}(a.a.Component);n.default=r;var d={"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/styles.less":"","src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo-select";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo-select.js":"import React from 'react'\nimport { Switch, Menu } from '@alicloud/console-components'\nimport styled from 'styled-components'\n\nconst { SubMenu, Item } = Menu\n\nconst Wrapper = styled.div`\n  .my-switch-label {\n    vertical-align: super;\n  }\n\n  .my-select-menu {\n    margin-top: 10px;\n    width: 200px;\n  }\n`\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      multiple: false,\n      subMenuSelectable: false,\n      shallowSelect: false,\n      isSelectIconRight: false,\n      selectedKeys: ['1'],\n    }\n    ;[\n      'handleMultipleChange',\n      'handleSubMenuSelectableChange',\n      'handleShallowSelectChange',\n      'handleSelect',\n      'handleIconDirectionChange',\n    ].forEach(method => {\n      this[method] = this[method].bind(this)\n    })\n  }\n\n  handleMultipleChange() {\n    this.setState({\n      multiple: !this.state.multiple,\n      selectedKeys: [],\n    })\n  }\n\n  handleIconDirectionChange() {\n    this.setState({\n      isSelectIconRight: !this.state.isSelectIconRight,\n      selectedKeys: [],\n    })\n  }\n\n  handleSubMenuSelectableChange() {\n    this.setState({\n      subMenuSelectable: !this.state.subMenuSelectable,\n      selectedKeys: [],\n    })\n  }\n\n  handleShallowSelectChange() {\n    this.setState({\n      shallowSelect: !this.state.shallowSelect,\n      selectedKeys: [],\n    })\n  }\n\n  handleSelect(selectedKeys, ...others) {\n    this.setState({\n      selectedKeys,\n    })\n\n    console.log(selectedKeys, ...others)\n  }\n\n  render() {\n    const {\n      multiple,\n      subMenuSelectable,\n      shallowSelect,\n      selectedKeys,\n      isSelectIconRight,\n    } = this.state\n    const selectMode = multiple ? 'multiple' : 'single'\n\n    return (\n      <Wrapper>\n        <div>\n          <span className=\"my-switch-label\">Multiple </span>\n          <Switch value={multiple} onChange={this.handleMultipleChange} />\n        </div>\n        <div>\n          <span className=\"my-switch-label\">isSelectIconRight </span>\n          <Switch value={multiple} onChange={this.handleIconDirectionChange} />\n        </div>\n        <div>\n          <span className=\"my-switch-label\">Label of submenu selectable </span>\n          <Switch\n            value={multiple}\n            onChange={this.handleSubMenuSelectableChange}\n          />\n        </div>\n        <div>\n          <span className=\"my-switch-label\">Only first level selectable </span>\n          <Switch value={multiple} onChange={this.handleShallowSelectChange} />\n        </div>\n        <Menu\n          isSelectIconRight={isSelectIconRight}\n          className=\"my-select-menu\"\n          defaultOpenKeys={['sub']}\n          selectMode={selectMode}\n          selectedKeys={selectedKeys}\n          shallowSelect={shallowSelect}\n          onSelect={this.handleSelect}\n        >\n          <Item key=\"1\">Option 1</Item>\n          <Item disabled key=\"2\">\n            Disabled option 2\n          </Item>\n          <SubMenu key=\"sub\" label=\"Sub menu\" selectable={subMenuSelectable}>\n            <Item key=\"sub-1\">Sub option 1</Item>\n            <Item key=\"sub-2\">Sub option 2</Item>\n          </SubMenu>\n          <Item key=\"3\">Option 3</Item>\n        </Menu>\n      </Wrapper>\n    )\n  }\n}\nexport default Demo\n","demoMeta.json":'{"entryPath":"src/demo/demo-select.js"}'}}}]);
//# sourceMappingURL=165-88f90ba89dd2a89041e9.js.map