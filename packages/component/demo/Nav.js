import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import defaultProps from 'recompose/defaultProps'
import { Input, Nav } from '../src'
import { pascalCase } from './utils'
import nav from './nav.config.json'
import './nav.scss'

const { Item, Group } = Nav

const navDataSource = [
  {
    id: 'base-components',
    label: 'Base Components',
    children: nav.base,
  },
]

const AppNav = ({
  title,
  dataSource,
  activeId,
}) => (
  <div className="wind-demo-menu">
    <h1>{title}</h1>
    <div className="wind-demo-menu-search">
      <Input size="medium" />
    </div>
    <div className="wind-demo-menu-content">
      <Nav
        type="primary"
        defaultSelectedKeys={[activeId]}
      >
        {
          dataSource.map((item) => (
            <Group key={`wind-demo-group-${item.id}`} label={item.label}>
              {
                item.children.map((child) => (
                  <Item key={child}>
                    <Link to={`/${child}`}>
                      {pascalCase(child)}
                    </Link>
                  </Item>
                ))
              }
            </Group>
          ))
        }
      </Nav>
    </div>
  </div>
)

AppNav.propTypes = {
  title: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.object),
  activeId: PropTypes.string,
}

const enhance = compose(
  defaultProps({
    title: '@alicloud/console-components',
    dataSource: navDataSource,
  }),
  mapProps((ownerProps) => {
    const { match, ...restProps } = ownerProps
    const { activeId } = restProps

    if (activeId) {
      return restProps
    }

    if (match.params.component) {
      return {
        ...restProps,
        activeId: match.params.component,
      }
    }
  })
)

export default enhance(AppNav)
