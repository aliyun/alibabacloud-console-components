import '@alicloud/console-components/dist/wind.css'
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import LinkAnnouncement from './linkAnnouncement'
import LargeAnnouncement from './largeAnnouncement'
import CarouselAnnouncement from './carouselAnnouncement'
import CloseableAnnouncement from './closeableAnnouncement'

storiesOf('wind-rc-announcement', module).add('BasicAnnouncement', () => (
  <Basic />
))
storiesOf('wind-rc-announcement', module).add('LinkAnnouncement', () => (
  <LinkAnnouncement />
))
storiesOf('wind-rc-announcement', module).add('LargeAnnouncement', () => (
  <LargeAnnouncement />
))
storiesOf('wind-rc-announcement', module).add('CarouselAnnouncement', () => (
  <CarouselAnnouncement />
))
storiesOf('wind-rc-announcement', module).add('CloseableAnnouncement', () => (
  <CloseableAnnouncement />
))
