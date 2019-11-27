const getDisplayName = (ReactComponent, defaultName = 'Component') => {
  if (!ReactComponent) {
    return defaultName
  }

  return ReactComponent.displayName || ReactComponent.name || defaultName
}

export default getDisplayName
