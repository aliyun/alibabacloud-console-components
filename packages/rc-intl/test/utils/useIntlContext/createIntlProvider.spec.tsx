import React from 'react'
import { mount } from 'enzyme'

import { Consumer } from '@alicloud/console-components-intl-context'
import createIntlProvider from '../../../src/utils/useIntlContext/createIntlProvider'
import ReactIntl from '../../../src/ReactIntl'
import { create } from '../../../src/factory'

describe('createIntlProvider', () => {
  let intlInstance = create(new ReactIntl())
  let { IntlProvider } = createIntlProvider(intlInstance)
  const TestConsumer: React.FC<any> = () => null
  beforeEach(() => {
    intlInstance = create(
      new ReactIntl({
        locale: 'locale-from-intlInstance',
        messages: { fromIntlInstance: 'message from intlInstance' },
      })
    )
    IntlProvider = createIntlProvider(intlInstance).IntlProvider
  })
  it("should get intl config from IWindIntlPublic if it's not in props", () => {
    const wrapper = mount(
      <IntlProvider>
        <Consumer>{value => <TestConsumer {...value} />}</Consumer>
      </IntlProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('intl config from props should have higher priority than intl config from IWindIntlPublic', () => {
    const wrapper = mount(
      <IntlProvider
        locale="locale-from-props"
        messages={{ fromProps: 'message from props' }}
      >
        <Consumer>{value => <TestConsumer {...value} />}</Consumer>
      </IntlProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('should provide flat rawMessages and nested messages', () => {
    const wrapper = mount(
      <IntlProvider
        locale="locale-from-props"
        messages={{
          'a.b.c.d': 'nested message from props 1',
          'a.b.e': 'nested message from props 2',
          'b.c.e': 'nested message from props 3',
          flat: 'flat message from props',
        }}
      >
        <Consumer>{value => <TestConsumer {...value} />}</Consumer>
      </IntlProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
