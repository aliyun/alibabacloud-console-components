import React from 'react'
import { Nav } from '@alicloud/console-components'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { IPageMeta } from '.'

const { Item, Group } = Nav

interface ISideBarProps {
  header: React.ReactNode
  list: IPageMeta[]
  currentPath: string
}

const SHeader = styled.h2`
  padding-left: 8px;
`

const SideBar: React.FC<ISideBarProps> = ({ header, list, currentPath }) => {
  return (
    <div className="sidebar">
      <SHeader>
        {header} · {list.length}
      </SHeader>
      <Nav selectedKeys={currentPath} type="line">
        {list.map((item, index) => (
          <Item key={item.path}>
            <Link to={item.path}>
              {item.name} {item.zhName}
            </Link>
          </Item>
        ))}
      </Nav>
    </div>
  )
}

export default SideBar
