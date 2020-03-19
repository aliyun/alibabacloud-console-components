import Nav from '../src/Nav'
import { navExtraClassName } from '../src/constants'
import { Breadcrumb } from '@alicloud/console-components'

describe('Nav', () => {
  let wrapper
  beforeEach(() => {
    wrapper = null
  })
  test('extra should work', () => {
    wrapper = shallow(<Nav extra={<div>I am extra content.</div>} />)
    const extra = wrapper.find(`.${navExtraClassName}`)
    expect(extra.children()).toMatchInlineSnapshot(`
                        <div>
                          I am extra content.
                        </div>
                `)
  })
  test('breadcrumbs should work', () => {
    wrapper = shallow(
      <Nav
        breadcrumbs={[
          <a>element breadcrumb</a>,
          { text: 'link breadcrumb1' },
          { text: 'link breadcrumb2', key: 'custom key' },
          undefined,
        ]}
      />
    )
    const extra = wrapper.find(Breadcrumb)
    expect(extra.children()).toMatchInlineSnapshot(`
      Array [
        <Config(Item)
          key="page-breadcrumb-item-0"
        >
          <a>
            element breadcrumb
          </a>
        </Config(Item)>,
        <Config(Item)
          key="page-breadcrumb-item-1"
        >
          <branch(Link)>
            link breadcrumb1
          </branch(Link)>
        </Config(Item)>,
        <Config(Item)
          key="custom key"
        >
          <branch(Link)
            key="custom key"
          >
            link breadcrumb2
          </branch(Link)>
        </Config(Item)>,
        <Config(Item)
          key="page-breadcrumb-item-3"
        >
          <branch(Link) />
        </Config(Item)>,
      ]
    `)
  })
})
