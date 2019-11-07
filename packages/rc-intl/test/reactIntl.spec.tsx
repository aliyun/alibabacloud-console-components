import React from 'react'
import { shallow } from 'enzyme'
import reactIntl from '../src/react'
import { messages1 } from './messages'

reactIntl.set({ messages: messages1, locale: 'en-US' })

describe('top level react instance', () => {
  describe('reactIntl() / reactIntl.message()', () => {
    it("should return string if value don't contain ReactElement", () => {
      expect(
        reactIntl('text.with.vars', { var1: 1234567, var2: 'asdasd' })
      ).toMatchInlineSnapshot(`"var1: 1234567. var2: asdasd"`)
      expect(
        reactIntl({
          id: 'text.with.vars',
          values: { var1: 1234567, var2: 'asdasd' },
        })
      ).toMatchInlineSnapshot(`"var1: 1234567. var2: asdasd"`)
      expect(
        reactIntl.message({
          id: 'text.with.vars',
          values: { var1: 1234567, var2: 'asdasd' },
        })
      ).toMatchInlineSnapshot(`"var1: 1234567. var2: asdasd"`)
    })
    it('should return ReactElement if preferString=false', () => {
      const TestComp = () =>
        reactIntl('text.with.vars', { var1: 1234567, var2: 'asdasd' }, false)
      const actual = shallow(<TestComp />)
      expect(actual).toMatchInlineSnapshot(`
                <Fragment>
                  var1: 1234567. var2: asdasd
                </Fragment>
            `)
    })
    it('should return ReactElement if values contain ReactElement', () => {
      const TestComp: React.FC = () =>
        reactIntl('text.with.vars', {
          var1: <p>1234567</p>,
          var2: 'asdasd',
        }) as React.ReactElement
      const actual = shallow(<TestComp />)
      expect(
        actual.equals(
          <>
            var1: <p>1234567</p>. var2: asdasd
          </>
        )
      ).toBe(true)
    })
  })

  describe('reactIntl.html()', () => {
    it('should always return ReactElement', () => {
      const TestComp: React.FC = () =>
        reactIntl.html('text.with.vars', {
          var1: 1234567,
          var2: 'asdasd',
        }) as React.ReactElement
      const actual = shallow(<TestComp />)
      expect(
        actual.getElement().props.dangerouslySetInnerHTML.__html
      ).toMatchInlineSnapshot(`"var1: 1234567. var2: asdasd"`)
    })
    it('should escape html tags in values', () => {
      const TestComp: React.FC = () =>
        reactIntl.html('text.with.vars', {
          var1: '<em>1234567</em>',
          var2: 'asdasd',
        }) as React.ReactElement
      const actual = shallow(<TestComp />)
      expect(
        actual.getElement().props.dangerouslySetInnerHTML.__html
      ).toMatchInlineSnapshot(
        `"var1: &lt;em&gt;1234567&lt;/em&gt;. var2: asdasd"`
      )
    })
  })
})
