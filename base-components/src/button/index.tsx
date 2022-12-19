import { Button as NextButton } from '@alifd/next'
import React, { Children } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

import { withThemeClass } from '../utils/withThemeClass'
import { useCssVar } from '../utils/useCssVar'
import isReactFragment from '../utils/isReactFragment'

type NextButtonProps = React.ComponentProps<typeof NextButton>

const rxTwoToThreeCNChar = /^[\u4e00-\u9fa5]{2,3}$/
const rxFourCNChar = /^[\u4e00-\u9fa5]{4}$/

const isTwoToThreeCNChar = rxTwoToThreeCNChar.test.bind(rxTwoToThreeCNChar)
const isFourCNChar = rxFourCNChar.test.bind(rxFourCNChar)

const mapTeamixIconSize = (size: string) => {
  return {
    large: 'medium',
    medium: 'small',
    small: 'xs'
  }[size]
}

const Button: typeof NextButton = withThemeClass(
  React.forwardRef((props: NextButtonProps, ref) => {
    const { className, iconSize, size = 'medium' } = props
    let { children } = props
    const count = Children.count(children)
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    if (
      isReactFragment(children) &&
      theme !== 'wind' &&
      !theme.startsWith('xconsole')
    ) {
      children = <span className={'next-btn-helper'}>{children}</span>
    }
    // 判断是否是2-3个汉字
    if (
      // xconsole相关主题不需要该功能
      theme !== 'wind' &&
      !theme.startsWith('xconsole') &&
      typeof children === 'string' &&
      isTwoToThreeCNChar(children)
    ) {
      return (
        <NextButton
          {...props}
          className={cls('isTwoToThreeCNCharBtn', className)}
          ref={ref as any}
        >
          {children}
        </NextButton>
      )
    }
    // 判断是否是4个汉字
    if (
      // xconsole相关主题不需要该功能
      theme !== 'wind' &&
      !theme.startsWith('xconsole') &&
      typeof children === 'string' &&
      isFourCNChar(children)
    ) {
      return (
        <NextButton
          {...props}
          className={cls('isFourCNCharBtn', className)}
          ref={ref as any}
        >
          {children}
        </NextButton>
      )
    }
    if (
      (count === 1 &&
        (children as any)?.type?.displayName === 'Config(Icon)') ||
      (children as any)?.type?.displayName === 'TeamixIcon'
    ) {
      return (
        <NextButton
          {...props}
          className={cls('isOnlyIcon', className)}
          ref={ref as any}
        >
          {children}
        </NextButton>
      )
    }
    const clonedChildren = Children.map(children, (child: any, index) => {
      // 针对 teamix-icon 进行处理
      if (
        child &&
        ['function', 'object'].indexOf(typeof child.type) > -1 &&
        child.type?.displayName === 'TeamixIcon'
      ) {
        const iconCls = cls({
          'teamix-icon-first': count > 1 && index === 0,
          'teamix-icon-last': count > 1 && index === count - 1,
          [child.props.className]: !!child.props.className
        })
        return React.cloneElement(child, {
          className: iconCls,
          size: iconSize || mapTeamixIconSize(size)
        })
      }
      return child
    })
    return (
      <NextButton {...props} className={className} ref={ref as any}>
        {clonedChildren}
      </NextButton>
    )
  })
) as any

hoistNonReactStatics(Button, NextButton)

// @ts-ignore
Button.displayName = NextButton.displayName

export default Button
