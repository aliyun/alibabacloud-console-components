import React, { useMemo, useState, useCallback, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Location } from 'history'
import { withRouter, Link, matchPath } from 'react-router-dom'
import ConsoleMenu from './ConsoleMenu'
import { isNil } from './utils'
import { IItemDescriptor } from './types/IItemDescriptor.type'
import { IRoutableMenuProps } from './types/IRoutableMenuProps.type'
import { IRoutableItemDescriptor } from './types/IRoutableItemDescriptor.type'

/* eslint-disable @typescript-eslint/no-explicit-any, no-restricted-syntax */

const Context = React.createContext<{ match: any; location: Location } | null>(
  null
)

const normalizeItems = (
  items: IRoutableItemDescriptor[] = []
): IItemDescriptor[] =>
  items.map((item) => {
    const { to, href, linkProps = {}, disabled, render, items: subItems } = item

    if (subItems) {
      return {
        ...item,
        items: normalizeItems(subItems),
      }
    }

    if (isNil(render) && !disabled) {
      // create leaf item a default renderer
      if (to) {
        // this is a in-app link, render `<Link>`
        return {
          ...item,
          render: (renderItem: IRoutableItemDescriptor) => {
            return (
              <Context.Consumer>
                {(value) => {
                  if (!value)
                    throw new Error(`item is not rendered under RoutableMenu`)
                  return (
                    <Link
                      {...linkProps}
                      // menu内部的链接不能被focus，
                      // 必须通过menu的键盘机制来选中
                      tabIndex="-1"
                      to={
                        typeof renderItem.to === 'function'
                          ? renderItem.to(value, renderItem)
                          : renderItem.to
                      }
                    >
                      {renderItem.label}
                    </Link>
                  )
                }}
              </Context.Consumer>
            )
          },
        }
      }

      if (href) {
        // this is a web link, render `<a>`
        return {
          ...item,
          render: (renderItem: IRoutableItemDescriptor) => (
            <Context.Consumer>
              {(value) => {
                if (!value)
                  throw new Error(`item is not rendered under RoutableMenu`)
                return (
                  <a
                    {...renderItem.linkProps}
                    href={
                      typeof renderItem.href === 'function'
                        ? renderItem.href(value, renderItem)
                        : renderItem.href
                    }
                  >
                    {renderItem.label}
                  </a>
                )
              }}
            </Context.Consumer>
          ),
        }
      }
    }

    return item
  })

const getBestMatchPattern = (pathname: string, pathPatterns: string[]) => {
  let currentBest: { length: number; match: any } = {
    length: Number.MAX_VALUE,
    match: null,
  }

  for (const path of pathPatterns) {
    const match = matchPath(pathname, path)
    // Check if the path matches the location.pathname.
    if (match) {
      // The identifier that described the complexity of path matching.
      // The shorter the length, the less the matching overhead,
      // and the most similar between pathname and pattern.
      let length = 0

      // To mutate path's length by couting params.
      // Every matched param will increase a bit of length.
      // @woota provided the idea and original algorithm in previous version.
      //
      // e.g.:
      // If the location.pathname is `/foo/bar/baz`:
      // - To match `/foo/bar/baz`, the length is `0`
      // - To match `/foo/bar/:id`, the length is `1`
      // - To match `/foo/:name/:id`, the length is `2`
      //
      if (match.params) {
        length += Object.keys(match.params).length
      }

      // Add a large number if the path NOT matches the location.pathname exactly.
      if (!match.isExact) {
        // Assuming params' count less than 1000
        length += 1000
      }

      // Compare the length to previous length and pick up the shorter one.
      if (length < currentBest.length) {
        currentBest = { length, match }
      }
    }
  }
  if (currentBest.match && currentBest.length < Number.MAX_VALUE)
    return currentBest
  return null
}

const isValidDescriptor = (
  descriptor: any
): descriptor is { key: string; length: number; match: any } =>
  typeof descriptor === 'object' &&
  !isNil(descriptor) &&
  !isNil(descriptor.key) &&
  !isNil(descriptor.length) &&
  !isNil(descriptor.match) &&
  typeof descriptor.match === 'object'

const compareDescriptor = (prev: any, next: any) => {
  if (!isValidDescriptor(next)) {
    return prev
  }
  // Returns newer descriptor if older descriptor is invalid,
  // or it has a shorter length.
  if (!isValidDescriptor(prev) || next.length < prev.length) {
    return next
  }
  return prev
}

const getBestMatchItem = (
  items: IRoutableItemDescriptor[] | undefined,
  pathname: string,
  initialDescriptor: { key: string; length: number; match: any } = {
    key: 'dummy',
    match: null,
    length: Number.MAX_VALUE,
  }
) => {
  let descriptor = initialDescriptor
  if (isNil(items)) return null

  for (const item of items) {
    let nextDescriptor: { key: string; match: any; length: number } | null

    if (item.items) {
      nextDescriptor = getBestMatchItem(item.items, pathname, descriptor)
    } else {
      const { key, activePathPatterns = [] } = item
      nextDescriptor = {
        key,
        length: Number.MAX_VALUE,
        match: null,
        ...getBestMatchPattern(pathname, [key, ...activePathPatterns]),
      }
    }
    descriptor = compareDescriptor(descriptor, nextDescriptor)

    // return descriptor with length === 0 immediately
    if (descriptor && descriptor.length <= 0) {
      return descriptor
    }
  }
  if (descriptor.length < Number.MAX_VALUE && !isNil(descriptor.match))
    return descriptor
  return null
}

const useBuiltInLocationMatcher = (
  pathname: string,
  items?: IRoutableItemDescriptor[]
) => {
  return useMemo(() => {
    return getBestMatchItem(items, pathname)
  }, [pathname, items])
}

const useMapLocationToActiveKey = (
  location: Location,
  mapLocationToActiveKey: IRoutableMenuProps['mapLocationToActiveKey']
) => {
  return useMemo(() => {
    if (typeof mapLocationToActiveKey === 'function') {
      return mapLocationToActiveKey(location)
    }
  }, [mapLocationToActiveKey, location])
}

const useClickMonitor = (originalOnClick?: (...args: any[]) => void) => {
  const [lastClickedKey, setLastClickedKey] = useState('')
  const wrappedOnClick = useCallback(
    (...args) => {
      if (typeof originalOnClick === 'function') {
        originalOnClick(...args)
      }
      setLastClickedKey(args[0])
    },
    [originalOnClick]
  )
  return [lastClickedKey, wrappedOnClick] as const
}

/**
 * 根据location，计算出应该active哪个item，有3种计算方式依次尝试：
 * 1. 用户提供了mapLocationToActiveKey，则直接mapLocationToActiveKey(location)
 * 2. 将pathname与item的key匹配，得到最接近的item
 * 3. 如果上述方法都不行，则直接使用用户最近点击的item
 */
const useRoutableMenu = (
  options: Pick<
    IRoutableMenuProps,
    'items' | 'mapLocationToActiveKey' | 'onItemClick' | 'location'
  >
) => {
  const { items, mapLocationToActiveKey, onItemClick, location } = options
  const { pathname } = location

  // 1. 用户提供了mapLocationToActiveKey，则直接mapLocationToActiveKey(location)
  const activeKeyFromLocation = useMapLocationToActiveKey(
    location,
    mapLocationToActiveKey
  )

  // 2. 将pathname与item的key匹配，得到最接近的item
  const matchResult = useBuiltInLocationMatcher(pathname, items) || {
    key: null,
    match: null,
  }
  const { key: matchedActiveKey, match } = matchResult

  // 3. 如果上述方法都不行，则直接使用用户最近点击的item
  const [lastClickedKey, wrappedOnClick] = useClickMonitor(onItemClick)

  const normalizedItems = useMemo(() => normalizeItems(items), [items])

  // 以上三个结果，取出优先级最高的有效值
  const activeKey = [
    activeKeyFromLocation,
    matchedActiveKey,
    lastClickedKey,
  ].filter((value) => !isNil(value))[0] as string | undefined

  return [
    normalizedItems,
    activeKey,
    wrappedOnClick,
    { match, location },
  ] as const
}

// 从一个树中，找出某个节点的所有父节点
function findParents(
  activeKey: string,
  items: IItemDescriptor[],
  currentParents: IItemDescriptor[]
): IItemDescriptor[] | null {
  for (const item of items) {
    if (item.key === activeKey) {
      return [...currentParents, item]
    }
    if (Array.isArray(item.items)) {
      const found = findParents(activeKey, item.items, [
        ...currentParents,
        item,
      ])
      if (found) return found
    }
  }
  return null
}

const RoutableMenu: React.FC<IRoutableMenuProps> = ({
  location,
  mapLocationToActiveKey,
  items,
  onItemClick,
  activeKey,
  // https://github.com/ReactTraining/react-router/issues/4683
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  staticContext,
  openKeys,
  onOpen,
  defaultOpenKeys,
  ...restProps
}) => {
  const [
    normalizedItems,
    derivedActiveKey,
    routableOnItemClick,
    providerValue,
  ] = useRoutableMenu({
    items,
    onItemClick,
    location,
    mapLocationToActiveKey,
  })

  // 目的：计算出actualActiveKey以后，需要激活对应节点，同时要把其所有父节点展开
  const [statefulOpenKeys, setOpenKeys] = useState<string[] | undefined>([])
  // 当用户传入activeKey时，为受控模式，不使用自己计算的derivedActiveKey
  const actualActiveKey = activeKey || derivedActiveKey
  const actualOpenKeys = (() => {
    if (defaultOpenKeys || openKeys) return openKeys
    // 仅当用户没有传入defaultOpenKeys、openKeys时，使用智能计算出的statefulOpenKeys
    return statefulOpenKeys
  })()

  useLayoutEffect(() => {
    const newOpenKeys = (() => {
      if (actualActiveKey) {
        // 找出激活节点的所有父节点
        const parentItems = findParents(actualActiveKey, normalizedItems, [])
        if (Array.isArray(parentItems)) {
          return parentItems.map((i) => i.key)
        }
      }
      return undefined
    })()
    setOpenKeys(newOpenKeys)
  }, [actualActiveKey, normalizedItems])

  const actualOnOpen = useCallback(
    (key: string[], extra: any) => {
      if (typeof onOpen === 'function') {
        onOpen(key, extra)
      }
      setOpenKeys(key)
    },
    [onOpen]
  )

  // openKeys传入undefined也会被认为是受控模式，因此如果想非受控，不能传入这个prop
  const openKeysProp = actualOpenKeys ? { openKeys: actualOpenKeys } : undefined

  return (
    <Context.Provider value={providerValue}>
      <ConsoleMenu
        {...restProps}
        items={normalizedItems}
        activeKey={actualActiveKey}
        {...openKeysProp}
        defaultOpenKeys={defaultOpenKeys}
        onOpen={actualOnOpen}
        onItemClick={(key, item, event) => {
          if (event.type === 'keydown' && event.target) {
            // 通过键盘点击菜单时，需要点击内部的链接，完成路由跳转
            const linkEl = (event.target as any).querySelector('div span a')
            if (linkEl && linkEl.click) {
              linkEl.click()
            }
          }
          routableOnItemClick(key, item, event)
        }}
      />
    </Context.Provider>
  )
}

RoutableMenu.propTypes = {
  ...ConsoleMenu.propTypes,
  location: PropTypes.objectOf(PropTypes.any) as any,
  mapLocationToActiveKey: PropTypes.func,
}

export default withRouter(RoutableMenu)
