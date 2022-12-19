import React from 'react'
import { Nav as NextNav } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'

type NavProps = React.ComponentProps<typeof NextNav>

const Nav: React.FC<NavProps> = ({ direction, activeDirection, ...rest }) => {
  if (!activeDirection && direction === 'ver') {
    activeDirection = 'right'
  }
  return (
    <NextNav
      direction={direction}
      activeDirection={activeDirection}
      {...rest}
    />
  )
}

hoistNonReactStatics(Nav, NextNav)

const exported: typeof NextNav = Nav as any

export default exported
