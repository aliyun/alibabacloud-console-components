import DataFields, { DataFields as DataFields2, Item, Label, Value } from '..'

describe('index', () => {
  it('should export APIs', () => {
    expect(DataFields).toBeDefined()
    expect(DataFields).toBe(DataFields2)
    expect(Item).toBeDefined()
    expect(Label).toBeDefined()
    expect(Value).toBeDefined()
    /* eslint-disable import/no-named-as-default-member */
    expect(DataFields.Item).toBe(Item)
    expect(DataFields.Label).toBe(Label)
    expect(DataFields.Value).toBe(Value)
    /* eslint-enable import/no-named-as-default-member */
  })
})
