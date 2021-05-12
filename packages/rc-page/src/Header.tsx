import React, { useState } from 'react'
import Truncate from '@alicloud/console-components-truncate'
import * as PropTypes from 'prop-types'
import * as S from './styles'
import BackArrow from './BackArrow'
import type { IHeaderProps } from './types/IHeaderProps.type'
export type { IHeaderProps }

/**
 * @public
 */
const Header: React.FC<IHeaderProps> = ({
  breadcrumb,
  className,
  style,
  childrenAlign,
  children,
  title,
  subTitle,
  hasBackArrow,
  renderBackArrow,
  onBackArrowClick,
  breadcrumbExtra,
  breadcrumbExtraAlign,
}) => {
  const [isTitleOverflow, setIsTitleOverflow] = useState(false)
  return (
    <>
      {(breadcrumb || breadcrumbExtra) && (
        <S.HeaderTopbar alignLeft={breadcrumbExtraAlign === 'left'}>
          <S.HeaderTopbarMain>{breadcrumb}</S.HeaderTopbarMain>
          <S.HeaderTopbarExtra>{breadcrumbExtra}</S.HeaderTopbarExtra>
        </S.HeaderTopbar>
      )}
      {(hasBackArrow || title || subTitle || children) && (
        <S.Header
          className={className}
          style={style}
          alignLeft={childrenAlign === 'left'}
        >
          <S.HeaderMain shouldGrow={isTitleOverflow}>
            {hasBackArrow && (
              <BackArrow render={renderBackArrow} onClick={onBackArrowClick} />
            )}
            {title && (
              <S.HeaderTitle>
                <Truncate
                  // 充满弹性容器
                  style={{ width: '100%' }}
                  type="width"
                  threshold="auto"
                  align="b"
                  tooltipMaxWidth={500}
                  isOverflowChange={(newIsOverflow) => {
                    setIsTitleOverflow(newIsOverflow)
                  }}
                >
                  {title}
                </Truncate>
              </S.HeaderTitle>
            )}
            {subTitle && <S.HeaderSubTitle>{subTitle}</S.HeaderSubTitle>}
          </S.HeaderMain>
          {children && <S.HeaderExtra>{children}</S.HeaderExtra>}
        </S.Header>
      )}
    </>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  hasBackArrow: PropTypes.bool,
  renderBackArrow: PropTypes.func,
  onBackArrowClick: PropTypes.func,
  title: PropTypes.node,
  subTitle: PropTypes.node,
  breadcrumb: PropTypes.node,
  childrenAlign: PropTypes.oneOf(['left', 'right']),
}

export default Header
