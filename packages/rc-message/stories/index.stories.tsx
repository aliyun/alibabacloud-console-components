import '@alicloud/console-components/dist/wind.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import LinkMessage from './linkMessage'
import LargeMessage from './largeMessage'
import CarouselMessage from './carouselMessage'
import CloseableMessage from './closeableMessage'
import ToastMessage from './toastMessage'

storiesOf('wind-rc-message', module).add('basic-message', () => <Basic />)
storiesOf('wind-rc-message', module).add('link-message', () => <LinkMessage />)
storiesOf('wind-rc-message', module).add('large-message', () => (
  <LargeMessage />
))
storiesOf('wind-rc-message', module).add('carousel-message', () => (
  <CarouselMessage />
))
storiesOf('wind-rc-message', module).add('closeable-message', () => (
  <CloseableMessage />
))
storiesOf('wind-rc-message', module).add('toast-message', () => (
  <ToastMessage />
))
