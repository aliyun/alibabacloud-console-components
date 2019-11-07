export const messages1 = {
  'text.normal': 'This is a normal text',
  'text.with.vars': 'var1: {var1}. var2: {var2}',
  'text.with.number': `The number is {number, number}`,
  'text.with.date.short': 'Current date is { current, date, short }',
  'text.with.date.full': 'Current date is { current, date, full }',
  'text.with.time.short': 'Current time is { current, time, short }',
  'text.with.time.medium': 'Current time is { current, time, medium }',
  'text.with.select': `This is a { describe, select,
      simple {SIMPLE}
      vars {VARIABLES-INCLUDES}
      cond {CONDITIONAL-VARIABLES-INCLUDES}
    } text`,
  'text.with.plural': `You have { count, plural,
      =0 {no message}
      =1 {only one message}
      =2 {two messages}
      other {# messages}
    }`,
  'text.with.html': 'This is a <strong>{text}</strong> text',
  '@wind_v2.base.Pagination.next': 'Next page',
  '@wind_v2.rc.SlidePanel.ok': 'Submit',
}
