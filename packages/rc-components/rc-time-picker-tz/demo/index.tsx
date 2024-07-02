import React from 'react';
import ReactDOM from 'react-dom';
import '@alicloud/console-components/dist/xconsole.css';

import { TimePickerTz } from '../src';

export default function Demo() {
  return <TimePickerTz onChange={(value) => { console.log(value); console.log(value?.format()); console.log(value?.utc().format()) }} />;
}

ReactDOM.render(<Demo />, document.getElementById('app'));