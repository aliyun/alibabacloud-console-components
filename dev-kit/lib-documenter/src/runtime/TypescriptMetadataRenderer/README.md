# TypescriptMetadataRenderer

api-documenter 能够提取 ts 源码中的类型、注释信息，转化为 json 数据，
这里的组件将这些数据渲染出来，作为文档的一部分。

比如，每个 React 组件的 API 就是它的 props，而 props 可以用 typescript 的 Interface 来描述。因此，只要我们在文档中展示这个 Interface 的信息，用户就能知道这个 React 组件是怎么用的。

目前只渲染 Interface 的元数据，未来可以渲染 function 的元数据，作为 React hooks 的文档。
