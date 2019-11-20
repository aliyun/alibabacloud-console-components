import ConsoleComponentsSdk from '../src/index'

describe('ConsoleComponentsSdk #main', () => {
  it('exports in correct type', () => {
    [ConsoleComponentsSdk].forEach((ReactComponent) => {
      expect(typeof ReactComponent).toBe('function')
    })
  })
})
