import Title from '../src/Title'
import HistoryBack from '../src/HistoryBack'

describe('Title', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
  })
  test('classname prop should work', () => {
    wrapper = shallow(<Title className="custom-classname" />)
    expect(wrapper.find('.custom-classname').prop('className')).toBe(
      'wind-rc-page-title custom-classname'
    )
  })
  test('style prop should work', () => {
    wrapper = shallow(
      <Title
        className="custom-classname"
        style={{ zIndex: 6334 }}
      />
    )
    expect(wrapper.find('.custom-classname').prop('style')).toEqual({
      zIndex: 6334,
    })
  })
  test('text and subtext props should work', () => {
    wrapper = shallow(
      <Title
        text={<span>I am text</span>}
        subText={<em>I am subtext</em>}
      />
    )
    expect(
      wrapper.containsMatchingElement(
        <h3>
          <span>I am text</span>
        </h3>
      )
    ).toBe(true)
    expect(
      wrapper.containsMatchingElement(
        <h4>
          <em>I am subtext</em>
        </h4>
      )
    ).toBe(true)
  })
  it('childrenAlign prop should work', () => {
    wrapper = shallow(<Title />)
    let childrenWrapper
    childrenWrapper = wrapper.find('.wind-rc-page-title-children')
    expect(childrenWrapper.length).toBe(1)
    expect(childrenWrapper.prop('className')).toBe(
      'wind-rc-page-title-children wind-rc-page-title-children-left'
    )

    wrapper.setProps({ childrenAlign: 'right' })
    childrenWrapper = wrapper.find('.wind-rc-page-title-children')
    expect(childrenWrapper.length).toBe(1)
    expect(childrenWrapper.prop('className')).toBe(
      'wind-rc-page-title-children wind-rc-page-title-children-right'
    )
  })
  it('historyBack prop should work', () => {
    wrapper = shallow(<Title historyBack="/home" />)
    expect(wrapper.containsMatchingElement(<HistoryBack to="/home" />)).toBe(
      true
    )
    wrapper.setProps({ historyBack: undefined })
    expect(wrapper.containsMatchingElement(<HistoryBack />)).toBe(false)
  })
  it('children prop should work', () => {
    wrapper = shallow(
      <Title>
        <p>I am children</p>
      </Title>
    )
    expect(
      wrapper
        .find('.wind-rc-page-title-children')
        .containsMatchingElement(<p>I am children</p>)
    ).toBe(true)
  })
})
