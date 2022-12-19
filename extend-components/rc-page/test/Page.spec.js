import Page from '../src/index'
import Title from '../src/Title'
import Content from '../src/Content'
import Nav from '../src/Nav'
import { classNamePrefix } from '../src/constants'

describe('index.js', () => {
  it('should have component exported', () => {
    expect(Page).toBeDefined()
    expect(Page.Title).toBe(Title)
    expect(Page.Content).toBe(Content)
    expect(Page.Nav).toBe(Nav)
  })
})

describe('Page', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
  })
  test('className, style children should work', () => {
    wrapper = shallow(
      <Page
        className="custom-classname"
        style={{ zIndex: 34124 }}
      >
        <p>I am children</p>
      </Page>
    )
    const target = wrapper.find(`.${classNamePrefix}`)
    expect(target.hasClass('custom-classname')).toBe(true)
    expect(target.prop('style')).toEqual({ zIndex: 34124 })
    expect(target.children().equals(<p>I am children</p>)).toBe(true)
  })
  test('onlyContentScroll should work', () => {
    wrapper = shallow(<Page onlyContentScroll />)
    const target = wrapper.find(`.${classNamePrefix}`)
    expect(target.hasClass('only-content-scroll')).toBe(true)
  })
})
