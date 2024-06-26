# @alicloud/console-components-slide-panel

滑动面板，从浏览器右侧弹出面板。

## 基本用法

SlidePanel 适用于**只展示一个 panel**的情况(其实这应该符合大部分情况)，点击 open 按钮时弹出面板：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=SlidePanel)

弹出多个面板，用户可以在面板之间切换。这种场景需要使用 SlidePanelGroup 和 SlidePanelItem：

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=MultiPanel)

另一种多面板的方式：在一个 SlidePanel 中弹出另一个 SlidePanel
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=Nested)

从底部滑出的面板：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=BottomPanel)

通过控制 popupProps，可以让 SlidePanel 从内容区域的底部滑出：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=InLayout)

基于栈的多面板管理：每次只展示一个面板，但是可以进行下探、返回。使用`usePanelStack`来帮助你快速实现栈式面板管理：
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=StackPanel)

渲染到指定容器，通过`props.container`来指定 SlidePanel 要被渲染的容器
[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=SlidePanelWithContainer)

## APIs

### SlidePanel

SlidePanel 是基于 SlidePanelGroup 和 SlidePanelItem 的简单封装，将自己 props 透传给它们：

```tsx
<SlidePanelGroup {...slidePanelGroupProps}>
  <SlidePanelItem {...slidePanelItemProps} />
</SlidePanelGroup>
```

`<SlidePanel>` 同时接受`SlidePanelGroup`和`SlidePanelItem`的 props。`<SlidePanel>` 内部自动将自己的 props 分类成`slidePanelGroupProps`和`slidePanelItemProps`，像上面的代码片段展示的那样，透传给对应组件。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=types/ISlidePanelProps)

对于**只展示一个 panel**的情况(其实这应该符合大部分情况)，直接使用 SlidePanel 就很方便。使用方式见上面的[基本用法](#基本用法)。

如果要同时展示多个 panel，请直接使用 SlidePanelGroup 和 SlidePanelItem。

### SlidePanelGroup

SlidePanelGroup 定义一个滑动面板**组**，其中可以包含多个 SlidePanelItem。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=types/ISlidePanelGroupProps)

### SlidePanelItem

定义一个滑动面板。

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=types/ISlidePanelItemProps)

### usePanelStack

使用一个栈来管理多个面板：

1. 最初只有一个面板
2. 当加入新的面板时，展示新的面板（下探）
3. 当新面板返回时，展示最初的那个面板

#### 参数

```tsx
initer?: () => React.ReactElement
```

初始化最初展示的面板。

#### 返回值

[$XView](https://xconsole.aliyun-inc.com/demo-playground?consoleOSId=console-components-slide-panel-docs&servePath=https%3A%2F%2Fopensource-microapp.oss-cn-hangzhou.aliyuncs.com%2Fapp%2Fbreezr-docs%2F%2540alicloud%2Fconsole-components-slide-panel%2F-pre%2F&entryKey=types/IUsePanelStackReturn)

你需要将`top`渲染到`SlidePanelGroup`中。使用示例见前面的“基本用法”小节。

#### usePanelStackCtx

为了方便用户【在面板中】操作面板栈，我们提供了`usePanelStackCtx()`这个 hooks 来获得栈的操作方法：`push`和`pop`，这两个操作方法就是 usePanelStack 返回值中的`push`和`pop`。

```tsx
const FirstPanel: React.FC<{
  setIsPanelShowing: (v: boolean) => void
}> = ({ setIsPanelShowing }) => {
  const panelStackManager = usePanelStackCtx()
  return (
    <SlidePanelItem
      id="item1"
      width="medium"
      title="title1"
      headerExtra="extra1"
      onOk={() => setIsPanelShowing(false)}
      onCancel={() => setIsPanelShowing(false)}
    >
      item1
      <Button
        onClick={() => {
          panelStackManager.push(<SecondPanel />)
        }}
      >
        下探一级
      </Button>
    </SlidePanelItem>
  )
}
```

使用示例见前面的“基本用法”小节。
