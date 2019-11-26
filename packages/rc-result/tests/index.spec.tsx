import XconsoleRcResult from '../src/index'

describe('XconsoleRcResult #main', () => {
  it('exports in correct type', () => {
    [XconsoleRcResult].forEach((ReactComponent) => {
      expect(typeof ReactComponent).toBe('function')
    })
  })
})
