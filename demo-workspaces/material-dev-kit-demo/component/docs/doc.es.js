import React, { useEffect } from 'react';
import { mdx } from '@mdx-js/react';
import MyButton from '@alicloud/cc-demo-component';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var utils = (function () {
  console.log('demo utils!');
});

var Example = function Example() {
  useEffect(function () {
    utils();
  }, []);
  return React.createElement("p", null, "This is a React demo: ", React.createElement(MyButton, null));
};
const __demoSrcInfo = {"entry":"basic.tsx","modules":{"demo-utils.ts":{"originalCode":"export default () => {\n  console.log('demo utils!')\n}\n"},"basic.tsx":{"originalCode":"import React, { useEffect } from 'react'\nimport MyButton from '@alicloud/cc-demo-component'\nimport utils from './demo-utils'\n\nconst Example: React.FC<{}> = () => {\n  useEffect(() => {\n    utils()\n  }, [])\n  return (\n    <p>\n      This is a React demo: <MyButton />\n    </p>\n  )\n}\n\nexport default Example\n"}}};

var WithMenuDemo_stories_basic_tsx = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Example,
  __demoSrcInfo: __demoSrcInfo
});

var tocHeadings = [{
  "depth": 1,
  "id": "组件-2",
  "text": "组件 2"
}, {
  "depth": 2,
  "id": "具有代码高亮的代码块",
  "text": "具有代码高亮的代码块"
}, {
  "depth": 3,
  "id": "组件-demo",
  "text": "组件 DEMO"
}, {
  "depth": 3,
  "id": "组件-api",
  "text": "组件 API"
}];

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return mdx("div", props);
  };
};

var DemoRenderer__LinkInstructions = makeShortcode("DemoRenderer__LinkInstructions");
var InterfaceRenderer__LinkInstructions = makeShortcode("InterfaceRenderer__LinkInstructions");
var layoutProps = {
  tocHeadings: tocHeadings
};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);

  return mdx(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), mdx("h1", {
    "id": "组件-2"
  }, "\u7EC4\u4EF6 2"), mdx("p", null, "\u7EC4\u4EF6 2 \u8BF4\u660E"), mdx("ul", null, mdx("li", {
    parentName: "ul"
  }, "\u5217\u8868 1"), mdx("li", {
    parentName: "ul"
  }, "\u5217\u8868 2", mdx("ul", {
    parentName: "li"
  }, mdx("li", {
    parentName: "ul"
  }, "\u5217\u8868 2.1"), mdx("li", {
    parentName: "ul"
  }, "\u5217\u8868 2.2"))), mdx("li", {
    parentName: "ul"
  }, "\u5217\u8868 3", mdx("ol", {
    parentName: "li"
  }, mdx("li", {
    parentName: "ol"
  }, "\u5217\u8868 3.1"), mdx("li", {
    parentName: "ol"
  }, "\u5217\u8868 3.2"), mdx("li", {
    parentName: "ol"
  }, "\u5217\u8868 3.3"))), mdx("li", {
    parentName: "ul"
  }, "\u5217\u8868 3")), mdx("blockquote", null, mdx("p", {
    parentName: "blockquote"
  }, "\u8FD9\u662F\u5F15\u7528\u8BF4\u660E")), mdx("h2", {
    "id": "具有代码高亮的代码块"
  }, "\u5177\u6709\u4EE3\u7801\u9AD8\u4EAE\u7684\u4EE3\u7801\u5757"), mdx("pre", null, mdx("code", _extends({
    parentName: "pre"
  }, {
    "className": "language-javascript"
  }), "import Page from '@alicloud/console-components-page'\nimport { Link } from 'dva/router'\n\nconst { Breadcrumb, Header } = Page\n\nconst breadcrumb = (\n  <Breadcrumb>\n    <Breadcrumb.Item key=\"home\">\n      <Link to=\"/home\">\u9996\u9875</Link>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item key=\"list\">\n      <Link to=\"/list\">\u5217\u8868</Link>\n    </Breadcrumb.Item>\n    <Breadcrumb.Item key=\"detail\">\u8BE6\u60C5</Breadcrumb.Item>\n  </Breadcrumb>\n)\n\nconst Detail = () => (\n  <Page>\n    <Header breadcrumb={breadcrumb} title=\"\u8BE6\u60C5\" />\n  </Page>\n)\n")), mdx("h3", {
    "id": "组件-demo"
  }, "\u7EC4\u4EF6 DEMO"), mdx("p", null), mdx(DemoRenderer__LinkInstructions, {
    demoInfo: WithMenuDemo_stories_basic_tsx,
    mdxType: "DemoRenderer__LinkInstructions"
  }), mdx("h3", {
    "id": "组件-api"
  }, "\u7EC4\u4EF6 API"), mdx("p", null), mdx(InterfaceRenderer__LinkInstructions, {
    data: require("@@tsApiJson"),
    interfaceId: "IMyButtonProps",
    mdxType: "InterfaceRenderer__LinkInstructions"
  }));
}
MDXContent.isMDXComponent = true;

export default MDXContent;
export { tocHeadings };
