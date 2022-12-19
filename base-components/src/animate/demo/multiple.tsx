/**
 * @title 多个子元素动画
 * @description 展示多个子元素的进场离场动画。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Animate } from '@alicloudfe/components'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
  }

  handleAdd() {
    this.setState({
      items: [
        ...this.state.items,
        // eslint-disable-next-line
        prompt('Enter some text')
      ]
    })
  }

  handleRemove(i) {
    const newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  }

  render() {
    return (
      <div className="totolist-container">
        <Animate
          animationAppear
          animation="fade"
          className="todo-list"
          singleMode={false}
          beforeAppear={() => console.log('before appear')}
          onAppear={() => console.log('appear')}
          afterAppear={() => console.log('after appear')}
          beforeEnter={() => console.log('before enter')}
          onEnter={() => console.log('enter')}
          afterEnter={() => console.log('after enter')}
          beforeLeave={() => console.log('before leave')}
          onLeave={() => console.log('leave')}
          afterLeave={() => console.log('after leave')}
        >
          {this.state.items.map((item, i) => (
            <div key={item}>
              {item}
              <button onClick={() => this.handleRemove(i)}>&times;</button>
            </div>
          ))}
        </Animate>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <TodoList />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .fade-appear {
    opacity: 0.01;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }

  .totolist-container {
    padding: 20px;
    border: 1px solid #ccc;
    width: 200px;
    border-radius: 4px;
  }

  .todo-list > * {
    margin: 5px 0;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }

  .totolist-container > button {
    margin-top: 20px;
  }
`
