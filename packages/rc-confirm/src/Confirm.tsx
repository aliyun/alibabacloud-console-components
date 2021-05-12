import React, { useCallback } from 'react'
import show from './showConfirmDialog'
import type { IConfirmProps } from './types/IConfirmProps.type'
export type { IConfirmProps }

/**
 * @public
 */
const Confirm: React.FC<IConfirmProps> = ({
  type = 'help',
  title,
  content,
  onConfirm,
  onCancel,
  children,
  dialogProps,
  messageProps,
}) => {
  const showDialog = useCallback(() => {
    show({
      type,
      title,
      content,
      onCancel,
      onConfirm,
      dialogProps,
      messageProps,
    })
  }, [type, title, content, onCancel, onConfirm, dialogProps, messageProps])
  return renderChildren(children, showDialog)
}

export default Confirm

function renderChildren(children: React.ReactNode, showDialog: () => void) {
  if (React.isValidElement(children)) {
    return <children.type {...children.props} onClick={showDialog} />
  }
  if (Array.isArray(children)) {
    return React.Children.map(children, (elem) => {
      if (React.isValidElement(elem))
        return <elem.type {...elem.props} onClick={showDialog} />
      return elem
    })
  }
  if (typeof children === 'function') {
    return children(showDialog)
  }
}
