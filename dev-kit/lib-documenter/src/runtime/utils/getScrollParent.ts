// https://gist.github.com/twxia/bb20843c495a49644be6ea3804c0d775#gistcomment-2899112

const REGEXP_SCROLL_PARENT = /^(visible|hidden)/

const getScrollParent = el =>
  !(el instanceof HTMLElement) || typeof window.getComputedStyle !== 'function'
    ? null
    : el.scrollHeight >= el.clientHeight &&
      !REGEXP_SCROLL_PARENT.test(
        window.getComputedStyle(el).overflowY || 'visible'
      )
    ? el
    : getScrollParent(el.parentElement) || window

export default getScrollParent
