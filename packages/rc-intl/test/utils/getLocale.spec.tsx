import getLocale from '../../src/utils/getLocale'
import * as Cookie from 'js-cookie'
const cookieGet = Cookie.get as jest.Mock
jest.mock('js-cookie')

declare global {
  interface Window {
    getLocaleKey1: string
    getLocaleKey2: string
  }
}

describe.only('getLocale', () => {
  const original = {} as any
  beforeEach(() => {
    window.getLocaleKey1 = 'lang1'
    window.getLocaleKey2 = 'lang3'

    cookieGet.mockImplementation(key =>
      key === 'localeKey' ? 'cookieLocaleValue' : undefined
    )

    original.htmlLang = document
      .getElementsByTagName('html')[0]
      .getAttribute('lang')
    document
      .getElementsByTagName('html')[0]
      .setAttribute('lang', 'htmlLocaleValue')

    original.navigatorLang = Object.getOwnPropertyDescriptor(
      window.navigator,
      'language'
    )
    Object.defineProperty(window.navigator, 'language', {
      configurable: true,
      get() {
        return 'navigatorLocaleValue'
      },
    })
  })

  afterEach(() => {
    delete window.getLocaleKey1
    delete window.getLocaleKey2

    cookieGet.mockReset()

    original.htmlLang &&
      document
        .getElementsByTagName('html')[0]
        .setAttribute('lang', original.htmlLang)

    original.navigatorLang &&
      Object.defineProperty(
        window.navigator,
        'language',
        original.navigatorLang
      )
  })

  it('should read from window.globalIdentifier', () => {
    expect(
      getLocale({
        globalIdentifier: ['getLocaleKey1', 'getLocaleKey2'],
      })
    ).toMatchInlineSnapshot(`"lang-1"`)

    window.getLocaleKey1 = 'lang2'
    expect(
      getLocale({
        globalIdentifier: ['getLocaleKey1', 'getLocaleKey2'],
      })
    ).toMatchInlineSnapshot(`"lang-2"`)

    delete window.getLocaleKey1
    expect(
      getLocale({
        globalIdentifier: ['getLocaleKey1', 'getLocaleKey2'],
      })
    ).toMatchInlineSnapshot(`"lang-3"`)
  })

  it('should read from cookie', () => {
    expect(
      getLocale({
        cookie: ['notLocaleKey'],
        html: false,
        navigator: false,
        fallback: 'fallback',
      })
    ).toMatchInlineSnapshot(`"fallback"`)
    expect(
      getLocale({
        cookie: ['notLocaleKey', 'localeKey'],
      })
    ).toMatchInlineSnapshot(`"cookie-locale-value"`)
  })

  it('should read from html', () => {
    expect(getLocale()).toMatchInlineSnapshot(`"html-locale-value"`)
  })

  it('should read from navigator', () => {
    expect(getLocale({ html: false })).toMatchInlineSnapshot(
      `"navigator-locale-value"`
    )
  })

  it('should respect the documented order', () => {
    expect(
      getLocale({
        globalIdentifier: ['getLocaleKey1', 'getLocaleKey2'],
        cookie: ['notLocaleKey', 'localeKey'],
        html: true,
        navigator: true,
        fallback: 'fallbackLang',
      })
    ).toMatchInlineSnapshot(`"lang-1"`)

    expect(
      getLocale({
        cookie: ['notLocaleKey', 'localeKey'],
        html: true,
        navigator: true,
        fallback: 'fallbackLang',
      })
    ).toMatchInlineSnapshot(`"cookie-locale-value"`)

    expect(
      getLocale({
        html: true,
        navigator: true,
        fallback: 'fallbackLang',
      })
    ).toMatchInlineSnapshot(`"html-locale-value"`)

    expect(
      getLocale({
        html: false,
        navigator: true,
        fallback: 'fallbackLang',
      })
    ).toMatchInlineSnapshot(`"navigator-locale-value"`)

    expect(
      getLocale({
        html: false,
        navigator: false,
        fallback: 'fallbackLang',
      })
    ).toMatchInlineSnapshot(`"fallback-lang"`)
  })
})
