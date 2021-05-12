import '@alicloud/console-components/dist/wind.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import Secondary from './secondary'
import ControlledMenu from './controlled-menu'
import WithItemsDecalration from './with-items-declaration'
import RoutableMenu from './routable-menu'
import RoutableMenuDefaultOpen from './routable-menu-default-open'
import WithDivider from './with-divider'
import SwitchHeader from './switch-header'
import { useTheme } from './utils/theme-switcher'

storiesOf('wind-rc-console-menu', module)
  .addDecorator((Story) => {
    const theme = useTheme()
    return (
      <div className="storybook-switch-theme">
        {theme.switchUI}
        <hr />
        <div style={{ position: 'relative' }}>
          <theme.current.wrapper>
            {/* @ts-ignore */}
            <Story />
          </theme.current.wrapper>
        </div>
      </div>
    )
  })
  .add('Basic', () => <Basic />)
  .add('Secondary', () => <Secondary />)
  .add('ControlledMenu', () => <ControlledMenu />)
  .add('WithItemsDecalration', () => <WithItemsDecalration />)
  .add('RoutableMenu', () => <RoutableMenu />)
  .add('RoutableMenuDefaultOpen', () => <RoutableMenuDefaultOpen />)
  .add('WithDivider', () => <WithDivider />)
  .add('SwitchHeader', () => <SwitchHeader />)
