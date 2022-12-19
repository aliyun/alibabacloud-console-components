import HistoryBack from '../src/HistoryBack'
import { Icon } from '@alicloud/console-components'
import Link from '@ali/wind-rc-link'

describe('HistoryBack', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
  })
  it('should render <Link> if `to` prop is passed', () => {
    wrapper = shallow(<HistoryBack to="/home" />)
    expect(
      wrapper.matchesElement(
        <Link to="/home">
          <Icon />
        </Link>
      )
    ).toBe(true)

    // should pass onClick to it
    const mockOnClick = jest.fn()
    wrapper.setProps({ onClick: mockOnClick })
    expect(
      wrapper.matchesElement(
        <Link to="/home" onClick={mockOnClick}>
          <Icon />
        </Link>
      )
    ).toBe(true)
  })

  it('should render <Icon> if `to` prop is not passed', () => {
    wrapper = shallow(<HistoryBack />)
    expect(wrapper.matchesElement(<Icon />)).toBe(true)
    // the default onClick should call window.history.back()
    const spy = jest.spyOn(window.history, 'back')
    wrapper.prop('onClick')()
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
    // if onClick is passed, it should be used
    const mockOnClick = jest.fn()
    wrapper.setProps({ onClick: mockOnClick })
    expect(wrapper.prop('onClick')).toBe(mockOnClick)
  })
})
