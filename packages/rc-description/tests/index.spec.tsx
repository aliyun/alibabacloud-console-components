import XconsoleRcDescription from '../src/index'

describe('XconsoleRcDescription #main', () => {
  it('exports in correct type', () => {
    [XconsoleRcDescription].forEach((ReactComponent) => {
      expect(typeof ReactComponent).toBe('function')
    })
  })
})
