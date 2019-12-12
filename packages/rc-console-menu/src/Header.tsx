import React, { useState } from 'react'
import { Icon, Dropdown, Menu } from '@alicloud/console-components'
import cs from 'classnames'
import * as S from './styles'
import { IConsoleMenuProps, IOnSelect } from './ConsoleMenu'

export interface IHeaderProps {
  header?: IConsoleMenuProps['header']
  headers?: IConsoleMenuProps['headers']
  onSelectHeader?: IOnSelect
}

const renderItem = (headers: IConsoleMenuProps['headers']) =>
  Array.isArray(headers)
    ? headers.map((item: string) => <Menu.Item key={item}>{item}</Menu.Item>)
    : null

const Header: React.FC<IConsoleMenuProps & {
  /**
   * 来自ConfigProvider
   */
  fusionPrefix: string
}> = ({ header, headers, onSelectHeader, fusionPrefix }) => {
  const [direction, setDirection] = useState('down')

  const handleChangeDirection = () => {
    setDirection(direction === 'down' ? 'up' : 'down')
  }

  const handleClick = (selectedKey: string) => {
    handleChangeDirection()
    onSelectHeader && onSelectHeader(selectedKey)
  }

  return (
    <S.Header id="container">
      <div className="header-text">{header}</div>
      {headers && headers.length > 0 && (
        <div className="header-select">
          <Dropdown
            visible={direction === 'up'}
            triggerType="click"
            offset={[16, 10]}
            onVisibleChange={(visible: boolean) => {
              setDirection(visible ? 'up' : 'down')
            }}
            container={(trigger: any) => trigger.parentNode}
            cache
            trigger={
              <div className="trigger-wrap">
                <Icon
                  onClick={handleChangeDirection}
                  size="small"
                  type={`sort-${direction}`}
                  className={cs({
                    'trigger-icon': true,
                    'icon-up': direction === 'up',
                  })}
                />
              </div>
            }
          >
            <S.SDropMenu
              fusionPrefix={fusionPrefix}
              style={{ left: 0, minWidth: '100%' }}
              selectedKeys={React.isValidElement(header) ? [] : header}
              selectMode="single"
              onItemClick={handleClick}
            >
              {renderItem(headers)}
            </S.SDropMenu>
          </Dropdown>
        </div>
      )}
    </S.Header>
  )
}

export default Header
