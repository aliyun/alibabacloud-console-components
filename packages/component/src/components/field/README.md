---
name: field
zhName: 表单数据获取、校验工具
---

# Field 表单数据获取、校验工具

### 何时使用

涉及到表单数据操作、校验的地方都可以用Field来管理数据。和组件关联后可以自动对表单数据进行回写、读取、校验。

### 使用注意

- 使用Field `init` 过的组件, `value` `onChange` 必须放在 init 的第三个参数, 否则有可能被 init 覆盖。
- `Form`已经和`Field` 在`数据获取`和`自动校验提示`方面做了深度优化，建议在`Form`中使用`Field`, 请查看 Form demo。
- initValue 类似组件的 defaultValue 只有在组件第一次render的时候才生效(ajax 异步调用设置 initValue 可能已经错过了第一次render)
- autoUnmount 默认打开的，如果需要保留会 `自动卸载的组件` 数据请关闭此项
- `parseName=true` 可以通过 `getValues` 获取到结构化的数据, 但是 getValue 还是必须传完整 key 值

### 基本使用

```
class Demo extends React.Component {
    field = new Field(this);    // 实例创建

    onClick = ()=>{
        console.log(this.field.getValue('name'));
    }
    render() {
        const init = this.field.init;

        // 注意：initValue只会在组件第一次初始化的时候被赋值，如果你是异步赋值请用setValue
        return <div>
            <Input {...init('name',{initValue:'first value'})} />
            <button onClick={this.onClick}>获取数据</button>
        </div>
    }
}
```

### 更新数据
#### 事件更新

```
class Demo extends React.Component {
    field = new Field(this);

    onClick = ()=>{
        this.field.setValue('name', 'newvalue');    // 赋值会自动触发render
    }
    render() {
        const init = this.field.init;

        return <div>
            <Input {...init('name')} />
            <button onClick={this.onClick}>设置数据</button>
        </div>
    }
}
```

#### props更新

```
class Demo extends React.Component {
    field = new Field(this);

    // 在组件挂载之前把数据设置进去(可以用initValue替代这种用法)
    componentWillMount() {
        this.field.setValue('name', 'init Name')
    }
    // 接收来自props的数据
    componentWillReceiveProps(nextProps) {
        this.field.setValue('name', nextProps.name)
    }
    render() {
        const init = this.field.init;

        return <div>
            <Input {...init('name')} />
        </div>
    }
}
```

#### ajax更新
```
class Demo extends React.Component {
    field = new Field(this);

    onClick = ()=>{
        Ajax({
            url:'/demo.json',
            success:(json)=>{
                // 回调事件中赋值更新
                this.field.setValue('name',json.name);
            }
        });
    }
    render() {
        const init = this.field.init;

        return <div>
            <Input {...init('name')} />
            <button onClick={this.onClick}>设置数据</button>
        </div>
    }
}
```

#### onChange更新监控
两种用法：
1. 统一管理

```
class Demo extends React.Component {
    field = new Field(this,{
        onChange:(name, value) => {
          switch(name) {
            case 'name1':
              this.field.setValue('name2','value set by name1');
              break;
            case 'name2':
              this.field.setValue('name1','value set by name2');
              break;
          }
        }
    });
    render() {
        const init = this.field.init;

        return <div>
          <Input {...init('name1')} />
          <Input {...init('name2')} />
        </div>
    }
}
```

2. 各自管理

```
class Demo extends React.Component {
    render() {
        const init = this.field.init;

        return <div>
          <Input {...init('name1',{
              props:{
                onChange:(v)=>{
                  this.field.setValue('name2','value set by name1');
                }
              }
            })} />
          <Input {...init('name2',{
              props:{
                onChange:(v)=>{
                  this.field.setValue('name1','value set by name2');
                }
              }
            })} />
        </div>
    }
}
```

详细请查看demo演示 `关联控制`

## 基本

#include "demo/demo1.js"

## APIs

[MDXInstruction:embedAPIFromFusion](https://github.com/alibaba-fusion/next/blob/master/docs/field/index.md)

## 自定义组件接入Field标准

- 支持受控模式(value+onChange) `必须`
    - value 控制组件数据展现
    - onChange 组件发生变化时候的回调函数（第一个参数可以给到value)

- 一次完整操作抛一次onChange事件 `建议`
    比如有Process表示进展中的状态，建议增加API `onProcess`；如果有Start表示启动状态，建议增加API `onStart`

- `value={undefined}`的时候清空数据, field 的 reset 函数会给所有组件下发 undefined 数据 `建议`

```
componentWillReceiveProps(nextProps) {
    if ('value' in nextProps ) {
        this.setState({
           value: nextProps.value === undefined? []: nextProps.value   //  设置组件的被清空后的数值
        })
    }
}
```

## 已知问题

- 为何手动调用`this.field.validate`的时候进不了回调函数？ 答: 是不是自定义了validator方法,确保`callback`在任何分支下都能被执行到。

## Demo

#include "demo/demo13.js"

#include "demo/demo2.js"

#include "demo/demo3.js"

#include "demo/demo4.js"

#include "demo/demo5.js"

#include "demo/demo6.js"

#include "demo/demo11.js"

#include "demo/demo12.js"

#include "demo/demo7.js"

#include "demo/demo8.js"

#include "demo/demo9.js"

#include "demo/demo10.js"

