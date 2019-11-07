import { shallow, mount } from 'enzyme'
import { Dropdown } from '@alicloud/console-components'
import Action from '@alicloud/console-components-actions/src'
import {
  baseClassName,
  triggerClassName,
} from '@alicloud/console-components-actions/src/constants'
import React from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = props => {
  // eslint-disable-next-line
  return <a {...props}></a>
}

describe('Actions', () => {
  test('className and style should work', () => {
    const wrapper = shallow(
      <Action className="custom-classname" style={{ zIndex: 8768 }} />
    )
    const target = wrapper.find(`.${baseClassName}`)
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.prop('style')).toMatchObject({ zIndex: 8768 })
    expect(target.children().exists()).toBe(false)
  })

  describe('children rendering', () => {
    it('should render single child', () => {
      const wrapper = mount(
        <Action>
          <p>I am a child</p>
        </Action>
      )
      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(true)
    })

    it('should render all children if num <= threshold', () => {
      const wrapper = mount(
        <Action>
          <p>I am a child</p>
          <p>I am child2</p>
          <Link href="details">详情</Link>
        </Action>
      )
      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(true)
      expect(wrapper.containsMatchingElement(<p>I am child2</p>)).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(true)
    })

    it('should hide extra children', () => {
      const wrapper = mount(
        <Action>
          <p>I am a child</p>
          <p>I am child2</p>
          <Link href="details">详情</Link>
          <Link href="edit">编辑</Link>
        </Action>
      )
      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(true)
      expect(wrapper.containsMatchingElement(<p>I am child2</p>)).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(false)
      // click the expand trigger
      wrapper.find(`i.${triggerClassName}`).simulate('click')
      // now the hidden item should show
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(true)
    })

    test("React.Fragment's children should bubble up", () => {
      const wrapper = mount(
        <Action>
          <>
            <p>I am a child</p>
            <p>I am child2</p>
          </>
          <>
            <Link href="details">详情</Link>
            <Link href="edit">编辑</Link>
          </>
        </Action>
      )
      /**
       * should be equal to the last test case:
        <Action>
          <p>I am a child</p>
          <p>I am child2</p>
          <Link href="details">详情</Link>
          <Link href="edit">编辑</Link>
        </Action>
        and the threadhold should hide the 4th item
       */
      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(true)
      expect(wrapper.containsMatchingElement(<p>I am child2</p>)).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(false)
      // click the expand trigger
      wrapper.find(`i.${triggerClassName}`).simulate('click')
      // now the hidden item should show
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(true)
    })

    test('threshold should work', () => {
      const wrapper = mount(
        <Action threshold={2}>
          <p>I am a child</p>
          <p>I am child2</p>
          <Link href="details">详情</Link>
          <Link href="edit">编辑</Link>
        </Action>
      )
      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(true)
      expect(wrapper.containsMatchingElement(<p>I am child2</p>)).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(false)
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(false)
      // click the expand trigger
      wrapper.find(`i.${triggerClassName}`).simulate('click')
      // now the hidden items should show
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(true)
    })

    test('expandTrigger and expandTriggerType should work', () => {
      const wrapper = mount(
        <Action>
          <p>I am a child</p>
          <p>I am child2</p>
          <Link href="details">详情</Link>
          <Link href="edit">编辑</Link>
        </Action>
      )
      // test default values
      let dropDown = wrapper.find(Dropdown)
      expect(dropDown.prop('triggerType')).toBe('click')
      // expect(
      //   mount(dropDown.prop('trigger') as any).containsMatchingElement(
      //     <SExpandTrigger type="more" size="xs" tabIndex={0} />
      //   )
      // ).toBe(true)
      // set values and test if it works
      wrapper.setProps({
        expandTriggerType: 'hover',
        expandTrigger: <button type="button">custom trigger</button>,
      })
      dropDown = wrapper.find(Dropdown)
      expect(dropDown.prop('triggerType')).toBe('hover')
      expect(
        mount(dropDown.prop('trigger') as any).containsMatchingElement(
          <button type="button">custom trigger</button>
        )
      ).toBe(true)
    })

    test('if children not given, dataSource should be used', () => {
      const wrapper = mount(
        <Action
          dataSource={[
            <p>I am a child</p>,
            <p>I am child2</p>,
            <Link href="details">详情</Link>,
            <Link href="edit">编辑</Link>,
          ]}
        />
      )

      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(true)
      expect(wrapper.containsMatchingElement(<p>I am child2</p>)).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(false)
      // click the expand trigger
      wrapper.find(`i.${triggerClassName}`).simulate('click')
      // now the hidden item should show
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(true)
    })

    it('should ignore children with props.visible===false', () => {
      const props: any = { visible: false }
      const wrapper = mount(
        <Action>
          <p {...props}>I am a child</p>
          <p>I am child2</p>
          <>
            <Link href="details">详情</Link>
            <Link href="edit" visible={false}>
              编辑
            </Link>
          </>
        </Action>
      )
      expect(wrapper.containsMatchingElement(<p>I am a child</p>)).toBe(false)
      expect(wrapper.containsMatchingElement(<p>I am child2</p>)).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="details">详情</Link>)
      ).toBe(true)
      expect(
        wrapper.containsMatchingElement(<Link href="edit">编辑</Link>)
      ).toBe(false)
    })

    it('should handle(ignore) single falsy child', () => {
      const wrapper = mount(<Action>{null}</Action>)
      const target = wrapper.find(`div.${baseClassName}`)
      expect(target.children().length).toBe(0)
    })

    it('should handle non-element children', () => {
      const wrapper = mount(
        <Action threshold={2}>
          {null}
          <p>I am a child</p>
          {undefined}
          {''}
          <p>I am child2</p>
          {0}
        </Action>
      )
      const target = wrapper.find(`div.${baseClassName}`)
      expect(target.children().length).toBe(2)
      expect(
        target.childAt(0).containsMatchingElement(<p>I am a child</p>)
      ).toBe(true)
      expect(
        target.childAt(1).containsMatchingElement(<p>I am child2</p>)
      ).toBe(true)
    })
  })
})
