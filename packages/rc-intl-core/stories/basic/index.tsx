import React, { Component } from 'react'
import intl, {
  withProvider,
  withRcIntl,
  IWindIntlPublic,
} from '@alicloud/console-components-intl-core'

const messages = {
  'text.normal': 'This is a normal text.',
  'text.normal.with.non.runtime': 'This is a normal text with non-runtime.',
  'text.with.vars': 'This is a { type } text.',
  'text.with.condition.vars': `This is a { type, select,
      simple { SIMPLE }
      vars { VARIABLES-INCLUDES }
      cond { CONDITIONAL-VARIABLES-INCLUDES }
    } text.`,
  'text.with.date': 'Current datetime is { current, date }',
  'text.with.number.and.plural': `You have { count, plural,
      =0 { no messages }
      =1 { only one message }
      =2 { two messages }
      other { # messages }
    }`,
  'text.with.html': 'This is a <strong>{text}</strong> text.',
  '@wind_v2.rc.RComponent.test': 'withRcIntl works!',
}

const RComponent: React.FC<{ intl: IWindIntlPublic }> = ({ intl: intl0 }) => (
  <>
    <p>{intl0('test')}</p>
  </>
)
const RComponentWithIntl = withRcIntl({
  componentName: 'RComponent',
})(RComponent)

intl.set({
  messages,
  locale: 'en-US',
})

const normalTextWithNonRuntime = intl('text.normal.with.non.runtime')

interface IAppState {
  isPanelVisible: boolean
}

class App extends Component<{}, IAppState> {
  state = {
    isPanelVisible: false,
  }

  togglePanel = () => {
    this.setState(prevState => ({
      isPanelVisible: !prevState.isPanelVisible,
    }))
  }

  render() {
    return (
      <>
        <p>{intl('text.normal')}</p>
        <p>{normalTextWithNonRuntime}</p>
        <p>{intl('text.with.vars', { type: 'variables-includes' })}</p>
        <p>
          {intl('text.with.vars', {
            type: <strong>component-variables-includes</strong>,
          })}
        </p>
        <p>{intl('text.with.condition.vars', { type: 'simple' })}</p>
        <p>{intl('text.with.condition.vars', { type: 'vars' })}</p>
        <p>{intl('text.with.condition.vars', { type: 'cond' })}</p>
        <p>{intl('text.with.date', { current: new Date() })}</p>
        <p>{intl('text.with.number.and.plural', { count: 0 })}</p>
        <p>{intl('text.with.number.and.plural', { count: 1 })}</p>
        <p>{intl('text.with.number.and.plural', { count: 2 })}</p>
        <p>{intl('text.with.number.and.plural', { count: 100 })}</p>
        <p>{intl('text.with.number.and.plural', { count: 1000 })}</p>
        <p>
          {intl({
            id: 'text.with.default.message',
            defaultMessage: 'This is a text with default message.',
          })}
        </p>
        <p>
          {intl({
            id: 'text.with.default.message.and.vars',
            defaultMessage: 'This is a text with {defaultMessage} and {vars}.',
            values: {
              defaultMessage: <strong>default message</strong>,
              vars: <input value="variables" readOnly />,
            },
          })}
        </p>
        <p>{intl.html('text.with.html', { text: 'html-include' })}</p>
        <p>{intl.date(new Date())}</p>
        <p>{intl.date(new Date(), 'date')}</p>
        <p>{intl.date(new Date(), 'time')}</p>
        <p>{intl.date(new Date(), 'dateTimeWithTimeZone')}</p>
        <p>{intl.number(1000.099)}</p>
        <RComponentWithIntl />
      </>
    )
  }
}

export default withProvider()(App)
