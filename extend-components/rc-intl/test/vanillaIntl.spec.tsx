import _warning from 'warning'
import { messages1 } from './messages'
import { VanillaIntl } from '../src'

const vanillaIntl = new VanillaIntl({ messages: messages1, locale: 'en-US' })

jest.mock('warning')

const mockedWarning = _warning as jest.Mock<typeof _warning>

describe('top level vanilla instance', () => {
  beforeEach(() => {
    mockedWarning.mockReset()
    mockedWarning.mockImplementation((...args: any[]) => {
      return jest.requireActual('warning')(...args)
    })
  })

  describe('vanillaIntl() / vanillaIntl.formatMessage()', () => {
    describe('with valid input', () => {
      afterEach(() => {
        expect(mockedWarning).toHaveBeenCalledTimes(0)
      })
      test('normal messsage', () => {
        expect(vanillaIntl.formatMessage('text.normal')).toMatchInlineSnapshot(
          `"This is a normal text"`
        )
        expect(
          vanillaIntl.formatMessage({ id: 'text.normal' })
        ).toMatchInlineSnapshot(`"This is a normal text"`)
        expect(
          vanillaIntl.formatMessage({ id: 'text.normal' })
        ).toMatchInlineSnapshot(`"This is a normal text"`)
        expect(
          vanillaIntl.formatMessage({
            id: 'text.normal',
            values: { useless: 'useless' },
          })
        ).toMatchInlineSnapshot(`"This is a normal text"`)
      })
      test('messsage with vars', () => {
        expect(
          vanillaIntl.formatMessage('text.with.vars', {
            var1: 'variable1',
            var2: 'variable2',
          })
        ).toMatchInlineSnapshot(`"var1: variable1. var2: variable2"`)
        expect(
          vanillaIntl.formatMessage({
            id: 'text.with.vars',
            values: {
              var1: 'variable1',
              var2: 'variable2',
            },
          })
        ).toMatchInlineSnapshot(`"var1: variable1. var2: variable2"`)
        expect(
          vanillaIntl.formatMessage({
            id: 'text.with.vars',
            values: {
              var1: 'variable1',
              var2: 'variable2',
            },
          })
        ).toMatchInlineSnapshot(`"var1: variable1. var2: variable2"`)
      })
      test('messsage with number', () => {
        expect(
          vanillaIntl.formatMessage('text.with.number', { number: 1234567 })
        ).toMatchInlineSnapshot(`"The number is 1,234,567"`)
        expect(
          vanillaIntl.formatMessage({
            id: 'text.with.number',
            values: { number: 1234567 },
          })
        ).toMatchInlineSnapshot(`"The number is 1,234,567"`)
        expect(
          vanillaIntl.formatMessage({
            id: 'text.with.number',
            values: { number: 1234567 },
          })
        ).toMatchInlineSnapshot(`"The number is 1,234,567"`)
      })
      const datetime = new Date(2019, 3, 18, 1, 2, 3, 456)
      test('messsage with date', () => {
        expect(
          vanillaIntl.formatMessage('text.with.date.short', {
            current: datetime,
          })
        ).toMatchInlineSnapshot(`"Current date is 4/18/19"`)
        expect(
          vanillaIntl.formatMessage('text.with.date.full', {
            current: datetime,
          })
        ).toMatchInlineSnapshot(`"Current date is Thursday, April 18, 2019"`)
      })
      test('messsage with time', () => {
        expect(
          vanillaIntl.formatMessage('text.with.time.short', {
            current: datetime,
          })
        ).toMatchInlineSnapshot(`"Current time is 1:02 AM"`)
        expect(
          vanillaIntl.formatMessage('text.with.time.medium', {
            current: datetime,
          })
        ).toMatchInlineSnapshot(`"Current time is 1:02:03 AM"`)
      })
      test('messsage with select', () => {
        expect(
          vanillaIntl.formatMessage('text.with.select', { describe: 'simple' })
        ).toMatchInlineSnapshot(`"This is a SIMPLE text"`)
      })
      test('messsage with plural', () => {
        expect(
          vanillaIntl.formatMessage('text.with.plural', { count: 0 })
        ).toMatchInlineSnapshot(`"You have no message"`)
        expect(
          vanillaIntl.formatMessage('text.with.plural', { count: 1 })
        ).toMatchInlineSnapshot(`"You have only one message"`)
        expect(
          vanillaIntl.formatMessage('text.with.plural', { count: 2 })
        ).toMatchInlineSnapshot(`"You have two messages"`)
        expect(
          vanillaIntl.formatMessage('text.with.plural', { count: 3 })
        ).toMatchInlineSnapshot(`"You have 3 messages"`)
        expect(
          vanillaIntl.formatMessage('text.with.plural', { count: 100 })
        ).toMatchInlineSnapshot(`"You have 100 messages"`)
      })
      test('messsage with html and var', () => {
        expect(
          vanillaIntl.formatMessage('text.with.html', {
            text: '<em>normal</em>',
          })
        ).toMatchInlineSnapshot(
          `"This is a <strong><em>normal</em></strong> text"`
        )
      })
    })
    describe('with invalid input', () => {
      beforeEach(() => {
        mockedWarning.mockReset()
      })
      test('with non-exist key', () => {
        expect(
          vanillaIntl.formatMessage('text.not.exit')
        ).toMatchInlineSnapshot(`"text.not.exit"`)
        expect(mockedWarning.mock.calls).toMatchInlineSnapshot(`
          Array [
            Array [
              false,
              "[@ali/wind-intl] Cannot read text.not.exit from messages, will resolve this message with key: text.not.exit",
            ],
          ]
        `)
      })
      test("message with var but don't provide it", () => {
        expect(
          vanillaIntl.formatMessage('text.with.vars')
        ).toMatchInlineSnapshot(`"text.with.vars"`)
        expect(
          vanillaIntl.formatMessage('text.with.vars', {
            useless: 'useless value',
          })
        ).toMatchInlineSnapshot(`"text.with.vars"`)
        expect(mockedWarning.mock.calls).toMatchInlineSnapshot(`
          Array [
            Array [
              false,
              "The intl string context variable 'var1' was not provided to the string 'var1: {var1}. var2: {var2}'",
            ],
            Array [
              false,
              "The intl string context variable 'var1' was not provided to the string 'var1: {var1}. var2: {var2}'",
            ],
          ]
        `)
      })
      test('message with number var but provide it with non-number value', () => {
        expect(
          vanillaIntl.formatMessage('text.with.number', { number: 'asdasd' })
        ).toMatchInlineSnapshot(`"The number is NaN"`)
      })
    })
  })
  describe('vanillaIntl.formatHTMLMessage()', () => {
    test('normal message', () => {
      expect(
        vanillaIntl.formatHTMLMessage('text.normal')
      ).toMatchInlineSnapshot(`"This is a normal text"`)
      expect(
        vanillaIntl.formatHTMLMessage({ id: 'text.normal' })
      ).toMatchInlineSnapshot(`"This is a normal text"`)
      expect(
        vanillaIntl.formatHTMLMessage({
          id: 'text.normal',
          values: { useless: '<em>useless</em>' },
        })
      ).toMatchInlineSnapshot(`"This is a normal text"`)
    })
    test('message with vars', () => {
      expect(
        vanillaIntl.formatHTMLMessage('text.with.vars', {
          var1: 'variable1',
          var2: 'variable2',
        })
      ).toMatchInlineSnapshot(`"var1: variable1. var2: variable2"`)
      expect(
        vanillaIntl.formatHTMLMessage('text.with.vars', {
          var1: '<em>variable1</em>',
          var2: 'variable2',
        })
      ).toMatchInlineSnapshot(
        `"var1: &lt;em&gt;variable1&lt;/em&gt;. var2: variable2"`
      )
      expect(
        vanillaIntl.formatHTMLMessage({
          id: 'text.with.vars',
          values: {
            var1: '<em>variable1</em>',
            var2: 'variable2',
          },
        })
      ).toMatchInlineSnapshot(
        `"var1: &lt;em&gt;variable1&lt;/em&gt;. var2: variable2"`
      )
    })
    test('message with html', () => {
      expect(
        vanillaIntl.formatHTMLMessage('text.with.html', {
          text: '<em>normal</em>',
        })
      ).toMatchInlineSnapshot(
        `"This is a <strong>&lt;em&gt;normal&lt;/em&gt;</strong> text"`
      )
    })
  })
})
