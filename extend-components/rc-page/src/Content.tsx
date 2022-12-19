import React from 'react'
import * as PropTypes from 'prop-types'
import * as S from './styles'
import MenuContainer from './MenuContainer'
import type { IContentProps } from './types/IContentProps.type'
export type { IContentProps }

/**
 * 定义页面主体的内容结构。可以包含内容导航菜单，通过{@link IContentProps.menu | menu属性}传入。
 * @public
 */
const Content: React.FC<IContentProps> = ({
  className,
  style,
  adjustHeight = 'consoleBaseTopbarRoot',
  menu,
  children,
  menuMinWidth
}) => (
  <S.Content className={className} style={style}>
    {menu && (
      <S.ContentSide minWidth={menuMinWidth}>
        <MenuContainer adjustHeight={adjustHeight}>{menu}</MenuContainer>
      </S.ContentSide>
    )}
    <S.ContentMain className="windcc-page__content-main">
      {children}
    </S.ContentMain>
  </S.Content>
)

Content.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  menu: PropTypes.node,
  adjustHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
}

export default Content
