import WindRcPageNext from '../src/index'

describe('WindRcPageNext #main', () => {
  it('exports in correct type', () => {
    [WindRcPageNext].forEach((ReactComponent) => {
      expect(typeof ReactComponent).toBe('function')
    })
  })
})
