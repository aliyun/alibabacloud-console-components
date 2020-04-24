import React from 'react'
import { Button } from '@alicloud/console-components'
import Styled from 'styled-components'

const Demo1 = () => (
  <Wrapper>
    <Button type="normal">普通按钮</Button>
    <Button type="normal" loading>
      普通按钮
    </Button>
    <Button type="normal" disabled>
      普通按钮
    </Button>
    <Button type="normal" warning>
      普通按钮
    </Button>
    <Button type="normal" text>
      文字按钮
    </Button>
    <br />
    <br />

    <Button type="primary">主要按钮</Button>
    <Button type="primary" loading>
      主要按钮
    </Button>
    <Button type="primary" disabled>
      主要按钮
    </Button>
    <Button type="primary" warning>
      主要按钮
    </Button>
    <Button type="primary" text>
      主要按钮
    </Button>
    <br />
    <br />
    <Button type="secondary">Secondary</Button>
    <Button type="secondary" loading>
      Secondary
    </Button>
    <Button type="secondary" disabled>
      Secondary
    </Button>
    <div className="ghost-dark-background">
      <Button style={{ marginLeft: '16px' }} ghost="dark">
        Ghost
      </Button>
      <Button ghost="dark" disabled>
        Ghost
      </Button>
    </div>
  </Wrapper>
)

const Wrapper = Styled.div`
  .next-btn {
    margin-right: 8px;
  }
  .ghost-dark-background {
    margin-top: 16px;
    width: 50%;
    background: #333;
    margin-bottom: 20px;
    padding-left:10px;
    box-sizing: border-box;
    padding: 16px 0;
  }
`

export default Demo1
