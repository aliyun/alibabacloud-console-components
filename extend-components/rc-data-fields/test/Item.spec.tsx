import React from 'react'
import { mount } from 'enzyme'
import Item, { IItemProps } from '../src/Item'
import { itemClassName } from '../src/constants'
import Context from '../src/Context'
import Label from '../src/Label'
import Value from '../src/Value'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyProvider({ contextValue, children }: any): React.ReactElement {
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

// eslint-disable-next-line
function renderItem(props: IItemProps = {}, contextValue: any = {}) {
  const res = mount(
    <MyProvider contextValue={contextValue}>
      <Item {...props} />
    </MyProvider>
  ).find(Item)
  if (res.length !== 1) {
    throw new Error('more than 1 <Item> is rendered')
  }
  return res
}

describe('Item', () => {
  it('className, style, restProp should work', () => {
    const wrapper = renderItem({
      className: 'custom-classname',
      style: { zIndex: 8976 },
      align: 'bottom',
    })
    const target = wrapper.find(`.${itemClassName}`).first()
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.prop('style')).toMatchObject({ zIndex: 8976 })
    expect(target.prop('align')).toBe('bottom')
  })
  describe('Label rendering', () => {
    it('should not render <Label> if label is not given', () => {
      const wrapper = renderItem()
      expect(wrapper.find(Label).exists()).toBe(false)
    })
    it('should render <Label>', () => {
      const wrapper = renderItem({
        label: <span>I am label</span>,
      })
      expect(
        wrapper.find(Label).containsMatchingElement(<span>I am label</span>)
      ).toBe(true)
    })
    it('should pass labelLayout to <Label>', () => {
      const wrapper = renderItem({
        label: <span>I am label</span>,
        labelLayout: {
          align: 'center',
        },
      })
      expect(
        wrapper.find(Label).containsMatchingElement(<span>I am label</span>)
      ).toBe(true)
      expect(wrapper.find(Label).prop('align')).toBe('center')
    })
  })
  describe('Value rendering', () => {
    it('should render children inside <Value>', () => {
      const wrapper = renderItem({
        children: <p>I am children</p>,
      })
      expect(
        wrapper
          .find(Value)
          .children()
          .containsMatchingElement(<p>I am children</p>)
      ).toBe(true)
    })
    it('should render value as it is if render prop is not given', () => {
      const wrapper = renderItem(
        {
          dataIndex: 'dataSourceProp1',
        },
        {
          dataSourceProp1: 'dataSourceValue1',
          dataSourceProp2: 'dataSourceValue2',
        }
      )
      const target = wrapper.find(Value)
      expect(target.text()).toBe('dataSourceValue1')
    })
    it('should call render if render prop is given', () => {
      const mockRender = jest.fn(() => <div>returned by mockRender</div>)
      const dataSource = {
        dataSourceProp1: 'dataSourceValue1',
        dataSourceProp2: 'dataSourceValue2',
      }
      const wrapper = renderItem(
        {
          dataIndex: 'dataSourceProp2',
          render: mockRender,
        },
        dataSource
      )
      const target = wrapper.find(Value)
      expect(
        target.containsMatchingElement(<div>returned by mockRender</div>)
      ).toBe(true)
      expect(mockRender).toHaveBeenCalledTimes(1)
      // expect(mockRender.mock.calls).toMatchInlineSnapshot(`
      //   Array [
      //     Array [
      //       undefined,
      //       Object {},
      //     ],
      //   ]
      // `)
      expect(mockRender.mock.calls[0]).toEqual(['dataSourceValue2', dataSource])
    })
    it('should pass valueLayout to <Value>', () => {
      const wrapper = renderItem({
        valueLayout: {
          align: 'stretch',
        },
      })
      expect(wrapper.find(Value).prop('align')).toBe('stretch')
    })
  })
})
