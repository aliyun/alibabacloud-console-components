import XconsoleRcPortal from '../src/index'

describe('XconsoleRcPortal #main', () => {
  it('exports in correct type', () => {
    [XconsoleRcPortal].forEach((ReactComponent) => {
      expect(typeof ReactComponent).toBe('function')
    })
  })
})
