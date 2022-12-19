import Partial from '../src/Partial'

describe('Partial', () => {
  let wrapper
  test('classname, style and children props should work', () => {
    wrapper = shallow(
      <Partial
        className="custom-classname"
        style={{ zIndex: 2124 }}
      >
        <p>I am children</p>
      </Partial>
    )
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="wind-rc-page-partial custom-classname"
        style={
          Object {
            "zIndex": 2124,
          }
        }
      >
        <p>
          I am children
        </p>
      </div>
    `)
  })
})
