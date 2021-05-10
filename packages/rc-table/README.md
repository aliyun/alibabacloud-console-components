
# @alicloud/console-components-table

``@alicloud/console-components-table`` 是基于 ``Table`` 组件的增强实现，提供控制台标准化的数据列表

## 基本用法

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=basic)

## APIs
> 继承 `@alicloud/console-components` 基础组件 `Table` 的 API

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=types/IRcTableProps)

## 卫星组件

可以将 `@alicloud/console-components-table` 看做一个包含了不同功能区的 ``Table``，不同的功能区中使用的组件可以看做是 ``Table`` 的卫星组件

```
|PrimaryOperation | Search |      SecondaryOperation|
----------------------------------------------------
|                     Table                         |
----------------------------------------------------
|Selection             |                 Pagination |
```

### Pagination

**分页器 (Pagination)** 是数据列表中常用的功能组件，根据UED规约，位于数据表格的右下角区域。

`@alicloud/console-components-table` 内置了Pagination的能力，用户可以通过`props.pagination` 属性来定义分页器的属性和行为。有以下三种方式定义分页器区域：
- 使用属性定义。直接传入Pagination的props
- 传入jsx。比如`<Table.Pagination {...props} />`
- 传入一个渲染函数。比如`(tableProps) => (<Table.Pagination {...props} />)`

#### 使用属性来定义

在 ``@alicloud/console-components-table`` 中，预设了符合UED规约的分页器组件，在绝大多数情况下，你只需要关心分页器的部分属性，比如：

- ``current`` 当前分页页码
- ``total`` 当前数据总条目数
- ``pageSize`` 每页数据条目数
- ``onChange`` 分页发生变化触发行为（通常是请求列表的数据并重绘）

预设的分页器使用了响应式设计：

- 在视口宽度小于 496px 时，显示 `mini` 的分页组件，强制不显示 pageSizeList 和跳转 input
- 在视口宽度在 497px - 790px 时，显示 `simple` 的分页组件，强制不显示 pageSizeList 和跳转 input
- 在视口宽度在 791px - 1128px 时，默认显示 `normal` 的分页组件，强制不显示 pageSizeList 和跳转 input
- 在视口宽度大于 1129px 时，默认显示 `normal` 的分页组件


通过`pagination.popupProps`可以配置popup组件的行为，比如改变分页组件选择列表的弹出方向：
```jsx
<Table
  dataSource={list}
  columns={columns}
  pagination={{
    popupProps: {
      align: "bl tl"
    }
  }}
/>
```
如下的Demo所示

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withPaginationProps)


#### 使用jsx来定义

在大多数情况下，直接向 ``pagination`` 属性传入分页器的属性定义就可以完成标准场景的分页展示。如果你有一些情况下需要自定义这个区域的内容，也可以传入一个自定义组件来完成特定的业务需求。

如下Demo所示

##### 示例：在分页器左侧添加一个功能按钮`Custom Button`

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withCustomPagination)

#### 使用渲染函数来定义

```jsx
<Table
  pagination={(tableProps) => (
    <Pagination {...paginationProps} />
  )}
/>
```

不再列举Demo，开发者可自行尝试

### Selection

**批量操作 (Selection)** 区域位于 ``Table`` 的左下角。用于辅助表格数据的选择和操作。

#### 使用渲染函数来定义

可以通过 ``selection`` 属性传入一个函数来进行定义，渲染函数能够拿到当前选择状态。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withSelection)

### Operation

位于 Table 左上角和右上角的操作区。比如放置“新建按钮”、“刷新按钮”等等。

操作区默认为空，用户可以通过 `props.operation` 来定义操作区的内容。其中，`props.operation.primary`定义左上角的主操作区，`props.operation.secondary`定义右上角的次操作区。
如果用户给`props.operation`直接传入了一个jsx element，那么它将作为主操作区。

#### 使用jsx来定义

##### 只定义左上角操作区
```jsx
<Table
  operation={
    <>
      <Button type="primary" onClick={onCreate}>Create New Record</Button>
      <Button onClick={onRefresh}>Refresh</Button>
    </>
  }
  {...tableProps}
/>
```

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withPrimaryOperation)

##### 同时定义右上角和左上角操作区
```jsx
<Table
  operation={{
    primary: (
      <>
        <Button type="primary" onClick={onCreate}>Create New Record</Button>
        <Button onClick={onRefresh}>Refresh</Button>
      </>
    ),
    secondary: (
      <Button onClick={onConfig}>
        <Icon type="cog" />
      </Button>			
    )
  }}
  {...tableProps}
/>
```

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withOperation)


同样operation自定义组件时也可传入`(tableProps) => ReactNode`， 请参考`pagination`中的实现方式

### Search

**搜索区域 (Search)** 也会经常使用到，在 ``@alicloud/console-components-table`` 中预设了符合UED规约的搜索组件，在大多数场景下，你只需要关注一部分 ``Search`` 组件的属性。开发者也可自行传入组件`<Table.Search {...props} />`或者函数`(tableProps) => (<Table.Search {...props} />)`，来进行定制。

#### 使用属性来定义

search直接传入Search组件的props即可, 如下Demo所示。

```jsx
<Table
  search={{
    placeholder: '请输入name进行搜索',
    filterValue: 'en',
    filter: [
      {
        value: 'en',
        label: '英文',
      },
      {
        value: 'zh',
        label: '中文',
      },
    ],
    onSearch: handleSearch,
    onChange: handleSearch,
    ...seearchProps
  }}
/>

```

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withSearch)

#### 使用jsx来定义

在 search 右边添加一个自定义按钮（custom button）

```jsx
<Table
  search={
    <div>
      <Search
        placeholder="请输入name进行搜索"
        filterValue="en"
        filter={[
          {
            value: 'en',
            label: '英文',
          },
          {
            value: 'zh',
            label: '中文',
          },
        ]}
        onSearch={handleSearch}
        onChange={handleSearch}
      />
      <Button>Custom Button</Button>

    </div>
	}
/>
```
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withCustomSearch)

同样Search自定义组件时也可传入`(tableProps) => ReactNode`渲染函数， 请参考`pagination`中的实现方式


## 调整操作栏吸附宽度

使用`affixActionBar`时，可以通过`fixedBarExpandWidth`来调整操作栏吸附时的宽度，让它们更美观：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=withAppLayout)

## fixedHeader实现固定操作栏

有时候`affixActionBar`无法帮助你固定操作栏（由于`position:sticky`的机制），您可以使用`fixedHeader`结合`maxBodyHeight`促使Table的body部分进行滚动，从而实现操作栏的固定。

```jsx
<Table
  maxBodyHeight={300}
  fixedHeader={true}
/>
``` 

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-table-docs&entryKey=WithFixedHeader)