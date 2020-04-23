import React, { useMemo } from 'react'
import MenuSelect from '@alicloud/console-components-menu-select'
import * as S from './styles'
import { IConsoleMenuProps } from './ConsoleMenu'

const Header: React.FC<IConsoleMenuProps> = ({
  header,
  headers = [],
  onSelectHeader,
  headerDropdownProps = {},
}) => {
  const headerSource = useMemo(() => {
    return headers.map(item => ({
      label: item,
      value: item,
    }))
  }, [headers])

  return (
    <S.Header id="container">
      <div className="header-text">{header}</div>
      {headers && headers.length > 0 && (
        <MenuSelect
          className="wind-console-menu-select"
          dataSource={headerSource}
          value={header as string}
          onSelect={onSelectHeader}
          dropdownProps={{
            align: 'tr, br',
            offset: [16, 5],
            style: { width: '208px' },
            ...headerDropdownProps,
          }}
        />
      )}
    </S.Header>
  )
}

export default Header
