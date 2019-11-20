import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ConsoleComponentsSdk from '../src/index'

storiesOf('ConsoleComponentsSdk', module)
  .add('ConsoleComponentsSdk', () => {
   return (<div id="app-wrapper">
      <div id="app">
       <ConsoleComponentsSdk />
      </div>
    </div>);
  })
