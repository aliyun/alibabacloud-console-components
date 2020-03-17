import React, { CSSProperties } from 'react'
import * as PropTypes from 'prop-types'
import * as S from './styles'
import MenuContainer from './MenuContainer'

/**
 * @public
 */
export interface IContentProps {
  /**
   * 内容容器的类名。
   */
  className?: string
  /**
   * 内容容器的样式。
   */
  style?: CSSProperties
  /**
   * 内容的导航菜单。通常使用{@link Menu | Page.Menu}组件来定义，传给这个prop。
   */
  menu?: React.ReactNode
  /**
   * 设置内容导航的高度。默认值已经适配阿里云控制台顶部导航，阿里云开发者不需要特别关注。
   * @internal
   */
  adjustHeight?: number | string
  /**
   * 实际展示的内容。
   */
  children?: React.ReactNode
}

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
}) => (
  <S.Content className={className} style={style}>
    {menu && (
      <S.ContentSide>
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
