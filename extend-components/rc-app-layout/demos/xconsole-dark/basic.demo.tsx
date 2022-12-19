/**
* @title xconsole-dark/basic
*/

import { XConsoleDarkTheme as MenuTheme } from '@alicloud/console-components-console-menu'
import { XConsoleDarkTheme } from '@alicloud/console-components-app-layout'

import Basic from '../basic/basic2.demo'

import React from 'react'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        background: rgba(31,31,31,1) !important;
      }`;
    document.body.append(style);
    return () => {
      document.body.removeChild(style);
    }
  });
  return (
    <XConsoleDarkTheme>
      <MenuTheme>
        <Basic />
      </MenuTheme>
    </XConsoleDarkTheme>
  )
}

export default Demo
