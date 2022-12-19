export const getInitialRefElement = () => {
  if (typeof document === 'undefined') {
    // this is executed in SSR
    // document is not defined
    return null
  }
  return document.body as HTMLElement
}