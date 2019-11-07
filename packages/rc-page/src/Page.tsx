import React, { useLayoutEffect } from 'react'
import * as PropTypes from 'prop-types'
import * as S from './styles'

enum SceneryThemeColorMap {
  white = '#FFFFFF',
  grey = '#FAFAFA',
}

/**
 * @public
 */
export interface IPageProps {
  /**
   * Page元素的类名。
   */
  className?: string
  /**
   * Page元素的样式。
   */
  style?: React.CSSProperties
  /**
   * 内容。通常利用 `Page.Header` / `Page.Content` 组件来定义内容节点，以获得结构化的布局。
   */
  children?: React.ReactNode
  /**
   * 背板的样式主题。默认是`white`。
   */
  sceneryTheme?: 'white' | 'grey'
  /**
   * Page组件利用此值来获取背板元素（一个HTMLElement对象）的引用。默认获取`document.body`作为背板元素。背板元素会被增加额外的样式，样式由{@link IPageProps.sceneryTheme | sceneryTheme属性}来决定。<br>
   * 当其值为一个字符串时，Page会在内部调用 document.querySelector(props.sceneryRef) 来获取背板元素的引用；当其为函数时，Page调用该函数拿到背板元素的引用。
   * 拿到背板元素以后，Page就根据{@link IPageProps.sceneryTheme | sceneryTheme属性}来设置elem.style.backgroundColor。
   * 由于设置背板的主题有可能导致与应用的样式冲突，你可以通过更改`sceneryRef`的值来决定将哪个元素作为背板，或者将其设置为`false`来关闭背板样式设置。
   */
  sceneryRef?: string | boolean | (() => HTMLElement)
}

const usePageLayout = ({
  sceneryRef,
  sceneryTheme,
}: Required<Pick<IPageProps, 'sceneryRef' | 'sceneryTheme'>>): void => {
  useLayoutEffect(() => {
    let elem: HTMLElement | null = null

    if (typeof sceneryRef === 'function') {
      elem = sceneryRef()
    } else if (typeof sceneryRef === 'string') {
      elem =
        document.querySelector(sceneryRef) ||
        document.getElementById(sceneryRef)
    }

    if (!elem) {
      return
    }
    const elemNotNull = elem

    const prevElemBackgroundColor = elemNotNull.style.backgroundColor
    elemNotNull.style.backgroundColor = SceneryThemeColorMap[sceneryTheme]

    return () => {
      elemNotNull.style.backgroundColor = prevElemBackgroundColor
    }
  }, [sceneryTheme, sceneryRef])
}

/**
 * 整个页面的容器。
 * @public
 */
const Page: React.FC<IPageProps> = ({
  sceneryTheme = 'white',
  sceneryRef = () => document.body,
  className,
  style,
  children,
}) => {
  usePageLayout({ sceneryTheme, sceneryRef })

  return (
    <S.Page className={className} style={style}>
      {children}
    </S.Page>
  )
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
  // eslint-disable-next-line react/no-unused-prop-types
  sceneryTheme: PropTypes.oneOf(['white', 'grey']),
  // eslint-disable-next-line react/no-unused-prop-types
  sceneryRef: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.func,
  ]),
}

export default Page
