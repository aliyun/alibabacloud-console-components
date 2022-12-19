import React from 'react'
import { shallow, mount } from 'enzyme'
import DataFields from '../src/DataFields'
import Item from '../src/Item'
import { baseClassName } from '../src/constants'
import Context from '../src/Context'

describe('DataFields', () => {
  test('className, style, children should work', () => {
    const wrapper = shallow(
      <DataFields
        className="custom-classname"
        style={{ zIndex: 3453 }}
        dataSource={{}}
        items={[]}
      >
        <p className="test-chidren">I am children</p>
      </DataFields>
    )
    expect(
      wrapper.containsMatchingElement(
        <p className="test-chidren">I am children</p>
      )
    ).toBe(true)
    const target = wrapper.find(`.${baseClassName}`)
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.prop('style')).toMatchObject({ zIndex: 3453 })
  })
  describe('Item rendering', () => {
    it('should render items', () => {
      const wrapper = shallow(<DataFields dataSource={{}} items={[]} />)
      expect(wrapper.find(Item).exists()).toBe(false)

      wrapper.setProps({
        items: [
          {
            dataIndex: 'item1',
            label: '第一项',
          },
          {
            dataIndex: 'item2',
            label: '第二项',
            key: 'custom-key',
          },
        ],
      })
      const target = wrapper.find(Item)
      expect(target.length).toBe(2)
      expect(
        target.at(0).matchesElement(<Item dataIndex="item1" label="第一项" />)
      ).toBe(true)
      expect(target.at(0).key()).toBe('item-0')
      expect(
        target.at(1).equals(<Item dataIndex="item2" label="第二项" />)
      ).toBe(true)
      expect(target.at(1).key()).toBe('custom-key')
    })
  })
  it('should provide dataSource context', () => {
    const dataSource = { prop1: 'value1' }
    const wrapper = mount(
      <DataFields dataSource={dataSource} items={[]}>
        <Context.Consumer>
          {ds => {
            expect(ds).toBe(dataSource)
            return null
          }}
        </Context.Consumer>
      </DataFields>
    )
    wrapper.unmount()
  })
})
