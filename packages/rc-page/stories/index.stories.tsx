import '@alicloud/console-components/dist/wind.css'
import './styles.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import WithMenu from './with-menu'
import WithCustomBackArrowRender from './with-custom-back-arrow-render'
import WithSceneryTheme from './with-scenery-theme'
import LongTitle from './long-title'
import WithoutTitle from './without-title'
import WidthOverflow from './width-overflow'

storiesOf('@alicloud/console-components-page', module)
  .add('Basic', () => {
    return (
      <div id="app-wrapper">
        <div id="app">
          <Basic />
        </div>
      </div>
    )
  })
  .add('With Custom Back-Arrow Rendering', () => (
    <div id="app-wrapper">
      <div id="app">
        <WithCustomBackArrowRender />
      </div>
    </div>
  ))
  .add('WithMenu', () => {
    return (
      <div id="app-wrapper">
        <div id="app">
          <WithMenu />
        </div>
      </div>
    )
  })
  .add('WithSceneryTheme', () => {
    return (
      <div id="app-wrapper">
        <div id="app">
          <WithSceneryTheme />
        </div>
      </div>
    )
  })
  .add('LongTitle', () => {
    return (
      <div id="app-wrapper">
        <div id="app">
          <LongTitle />
        </div>
      </div>
    )
  })
  .add('WithoutTitle', () => {
    return (
      <div id="app-wrapper">
        <div id="app">
          <WithoutTitle />
        </div>
      </div>
    )
  })
  .add('WidthOverflow', () => {
    return (
      <div id="app-wrapper">
        <div id="app">
          <WidthOverflow />
        </div>
      </div>
    )
  })
