import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import ConsoleResult from '../src/index'

storiesOf('ConsoleResult', module)
  .add('ConsoleResult', () => {
   return (<div id="app-wrapper">
      <div id="app">
        <ConsoleResult
          type="success"
          title="创建成功，标题居左对齐，标题（不含icon）宽度根据文字内容自适应，超出400px后折行"
          description="描述内容，文案居左对齐，宽度根据文字内容自适应，超出400px后折行，此样式规则适用于页面、Slidepanel、对话框中的结果反馈。"
        />
      </div>
    </div>);
  })
