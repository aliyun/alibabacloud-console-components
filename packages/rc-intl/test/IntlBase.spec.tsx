import { messages1 } from './messages'
import IntlBase from '../src/IntlBase'

const datetime = new Date(2019, 3, 18, 1, 2, 3, 456)

const intlBase = new IntlBase(
  { messages: messages1, locale: 'en-US' },
  { isCrossModules: false }
)

describe('IntlBase#formatDate', () => {
  it('should formate date', () => {
    expect(intlBase.formatDate(datetime, 'date')).toBe('Apr 18, 2019')
    expect(intlBase.formatDate(datetime, 'time')).toBe('01:02:03')
    expect(intlBase.formatDate(datetime, 'dateTime')).toBe(
      'Apr 18, 2019, 01:02:03'
    )
    expect(intlBase.formatDate(datetime)).toBe('Apr 18, 2019, 01:02:03')
    expect(intlBase.formatDate(datetime, { year: '2-digit' })).toBe('19')
    expect(intlBase.formatDate(-1, { year: 'numeric' })).toBe('1970')
  })
})
describe('IntlBase#formatNumber', () => {
  it('should format number', () => {
    expect(intlBase.formatNumber(123456789)).toBe('123,456,789')
    expect(intlBase.formatNumber(-123456789)).toBe('-123,456,789')
  })
})
test('IntlBase#setLocale, IntlBase#getLocale', () => {
  expect(intlBase.getLocale()).toBe('en-US')
  intlBase.setLocale('zh-Hans-CN')
  expect(intlBase.getLocale()).toBe('zh-Hans-CN')
  intlBase.setLocale('en-US')
})
test('IntlBase#setMessages, IntlBase#getMessages', () => {
  expect(intlBase.getMessages()).toBe(messages1)
  const msgs = {}
  intlBase.setMessages(msgs)
  expect(intlBase.getMessages()).toBe(msgs)
  intlBase.setMessages(messages1)
})
test('IntlBase#set', () => {
  expect(intlBase.getLocale()).toBe('en-US')
  expect(intlBase.getMessages()).toBe(messages1)
  intlBase.set({})
  expect(intlBase.getLocale()).toBe('en-US')
  expect(intlBase.getMessages()).toBe(messages1)
  intlBase.set({ locale: 'zh-Hans-CN' })
  expect(intlBase.getLocale()).toBe('zh-Hans-CN')
  expect(intlBase.getMessages()).toBe(messages1)
  const msgs = {}
  intlBase.set({ messages: msgs })
  expect(intlBase.getLocale()).toBe('zh-Hans-CN')
  expect(intlBase.getMessages()).toBe(msgs)
  intlBase.set({ messages: messages1, locale: 'en-US' })
  expect(intlBase.getLocale()).toBe('en-US')
  expect(intlBase.getMessages()).toBe(messages1)
})
