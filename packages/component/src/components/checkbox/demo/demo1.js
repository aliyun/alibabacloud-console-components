import React from 'react'
import { Checkbox } from '@alicloud/console-components'
import './index.less'

const Demo1 = () => (
  <div>
    <h6>Different status without label:</h6>
    Unchecked：<Checkbox />&nbsp;
    DefaultChecked：<Checkbox defaultChecked />&nbsp;
    Indeterminate：<Checkbox defaultIndeterminate />&nbsp;
    Disabled：<Checkbox disabled />&nbsp;
    Checked-Disabled：<Checkbox disabled checked />&nbsp;
    Checked：<Checkbox checked />&nbsp;
    <h6>Using with label</h6>
    <Checkbox>Banana</Checkbox>&nbsp;
    <Checkbox id="apple" /><label htmlFor="apple" className="next-checkbox-label">Apple</label>&nbsp;
    <label>
      <Checkbox id="pear" />
      <span className="next-checkbox-label">Pear</span>
    </label>&nbsp;
    <Checkbox label="Banana" />
  </div>
)

export default Demo1
