import Content from '../src/Content'
import { contentClassName } from '../src/constants'

describe('Content', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
  })
  test('className, style, children should work', () => {
    wrapper = shallow(
      <Content
        className="custom-classname"
        style={{ zIndex: 34124 }}
      >
        <p>I am children</p>
      </Content>
    )
    const target = wrapper.find(`.${contentClassName}`)
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.prop('style')).toEqual({ zIndex: 34124 })
  })
})
