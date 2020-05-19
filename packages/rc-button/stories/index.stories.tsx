import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import TextButton from './text-button'
import SquareButton from './square-button'
import IconButton from './icon-button'
import LinkButtonLink from './link-button-link'
import LinkButtonHref from './link-button-href'

storiesOf('WindRcButtonCheckbox', module)
  .add('Basic', () => <Basic />)
  .add('TextButton', () => <TextButton />)
  .add('SquareButton', () => <SquareButton />)
  .add('IconButton', () => <IconButton />)
  .add('LinkButtonLink', () => <LinkButtonLink />)
  .add('LinkButtonHref', () => <LinkButtonHref />)
