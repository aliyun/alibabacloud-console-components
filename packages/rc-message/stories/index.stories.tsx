import '@alicloud/console-components/dist/wind.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import LinkMessage from './linkMessage'
import LargeMessage from './largeMessage'
import CarouselMessage from './carouselMessage'
import CloseableMessage from './closeableMessage'
import ToastMessage from './toastMessage'

storiesOf('wind-rc-message', module).add('BasicMessage', () => <Basic />)
storiesOf('wind-rc-message', module).add('LinkMessage', () => <LinkMessage />)
storiesOf('wind-rc-message', module).add('LargeMessage', () => <LargeMessage />)
storiesOf('wind-rc-message', module).add('CarouselMessage', () => (
  <CarouselMessage />
))
storiesOf('wind-rc-message', module).add('CloseableMessage', () => (
  <CloseableMessage />
))
storiesOf('wind-rc-message', module).add('ToastMessage', () => <ToastMessage />)
