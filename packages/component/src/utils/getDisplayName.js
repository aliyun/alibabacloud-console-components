/**
 * @param {React.Component} ReactComponent
 * @param {String=} defaultName
 * @return {String}
 */
const getDisplayName = (ReactComponent, defaultName = 'Component') => {
  if (!ReactComponent) {
    return defaultName
  }

  return (
    ReactComponent.displayName ||
    ReactComponent.name ||
    defaultName
  )
}

export default getDisplayName
