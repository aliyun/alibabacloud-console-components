import React, { useState, useRef, useCallback } from 'react'
import { isFunction } from 'lodash'
import { Input, Button, Field, Form } from '@alicloud/console-components'
import { withRcIntl } from '@alicloud/console-components-intl'
import Truncate from '@alicloud/console-components-truncate'
import cls from 'classnames'
import { GetFusionConfig, IFusionConfigProps } from './utils'
import Message from './Message'
import defaultLocaleMessages, { defaultMessages } from './defaultMessage'
import { IProps } from './types'
import { NAME_XREGEXP, DESC_XREGEXP } from './constants'
import * as S from './styles'

const SimpleEditor: React.FC<IProps & IFusionConfigProps> = ({
  intl = (key) => key,
  type = 'name',
  shape = 'icon',
  minLength = 2,
  maxLength,
  length = 200,
  okText,
  cancelText,
  editText,
  noEmptyText,
  tipFormatText,
  validateRegExp,
  invalidText,
  fusionConfig = {},
  children,
  onSubmit,
  onClose,
  overlayProps = {},
}) => {
  const [hasError, setHasError] = useState(false)

  const [visible, setVisible] = useState(false)

  const labelRef = useRef(null)

  const safeNodeRef = useRef(null)

  const field = Field.useField({
    onChange: () => {
      const error = field.getError('item')
      if (error !== null) {
        setHasError(true)
      } else {
        setHasError(false)
      }
    },
  })

  const { init } = field

  const handlePop = useCallback(
    (event: any) => {
      if (event.key && event.key !== 'Enter') {
        return null
      }
      setVisible(true)
      // setOnClickNum(0)
      field.reset(['item'])
      field.setValue('item', children)
    },
    [children, field]
  )

  const handleSubmit = useCallback(() => {
    // 校验
    field.validate()
    const error = field.getError('item')
    if (error !== null) {
      return false
    }
    const value: string = field.getValue('item')
    if (isFunction(onSubmit)) {
      onSubmit(value)
    }
    setVisible(false)
  }, [field, onSubmit])

  const handleClose = useCallback(() => {
    setVisible(false)
    if (isFunction(onClose)) {
      onClose()
    }
  }, [onClose])

  const handleRequestClose = useCallback(() => {
    setVisible(false)
    if (isFunction(onClose)) {
      onClose()
    }
  }, [onClose])

  const max = type === 'name' ? maxLength || 128 : 256

  const min = minLength || 2

  // 确定按钮文案
  const exactOkText = okText || intl('ok') || defaultMessages.ok

  // 取消按钮文案
  const exactCancelText = cancelText || intl('cancel') || defaultMessages.cancel

  // type === 'text' 时的文案
  const exactEditText = editText || intl('edit') || defaultMessages.edit

  // 输入框为空时候的提示
  const exactNoEmpty =
    noEmptyText || intl('no_empty') || defaultMessages.no_empty

  // 输入框中的内容不符合格式时候的文案
  const exactTipInvalidFormat =
    invalidText ||
    intl('tip_invalid_format') ||
    defaultMessages.tip_invalid_format

  // 输入框内容少于最小长度时的提示文案
  const exactTip2CharRequired =
    intl('tip_2_char_required') || defaultMessages.tip_2_char_required

  // 提示区域的文案
  const exactValidationCustomer =
    tipFormatText ||
    intl('text_validation_customer', { min, max }) ||
    intl(defaultMessages.text_validation_customer, { min, max })

  // type为text时候的样式
  const { prefix = 'next-' } = fusionConfig as { prefix: string }

  return (
    <div>
      <S.LabelWrapper ref={labelRef}>
        {/* 展示文案 */}
        <S.TargeWrapper>
          <Truncate threshold={length} align="r">
            {children || '-'}
          </Truncate>
        </S.TargeWrapper>

        {/* ICON */}
        <S.TriggerWrapper
          onClick={handlePop}
          onKeyPress={handlePop}
          role="button"
          tabIndex={0}
          aria-label={exactEditText}
          ref={safeNodeRef}
        >
          {shape === 'icon' ? (
            <S.SIcon type="edit" size="xs" />
          ) : (
            <Button
              type="primary"
              text
              className={cls('clear-border', 'editor-text-trigger')}
            >
              {exactEditText}
            </Button>
          )}
        </S.TriggerWrapper>
      </S.LabelWrapper>

      {/* 弹窗修改 */}
      <S.SOverlay
        {...overlayProps}
        visible={visible}
        target={() => labelRef.current}
        canCloseByOutSideClick
        onRequestClose={handleRequestClose}
        align="tl bl"
        safeNode={safeNodeRef.current}
        autoFocus
      >
        <S.EditorWrapper>
          <Form field={field}>
            <Form.Item required>
              <Input
                maxLength={max}
                minLength={min}
                hasLimitHint
                onPressEnter={handleSubmit}
                aria-label={exactEditText}
                aria-describedby="validation_help"
                {...init('item', {
                  initValue: children,
                  rules: [
                    {
                      required: true,
                      // strange, get an error in console if lose a key prop in here
                      message: (
                        <Message prefix={prefix} key="required">
                          {exactNoEmpty}
                        </Message>
                      ),
                    },
                    {
                      pattern:
                        validateRegExp ||
                        (type === 'name' ? NAME_XREGEXP : DESC_XREGEXP),
                      message: (
                        <Message prefix={prefix} key="pattern">
                          {exactTipInvalidFormat}
                        </Message>
                      ),
                    },
                    {
                      min,
                      message: (
                        <Message prefix={prefix} key="min">
                          {exactTip2CharRequired}
                        </Message>
                      ),
                    },
                    {
                      minLength: min,
                      message: (
                        <Message prefix={prefix} key="min">
                          {exactTip2CharRequired}
                        </Message>
                      ),
                    },
                  ],
                })}
              />
            </Form.Item>

            {/* 提示区域 */}
            <S.EditorHelp id="validation_help">
              {exactValidationCustomer}
            </S.EditorHelp>

            {/* 提交区域 */}
            <S.EditorActions>
              {/* 提交按钮 */}
              <Button
                size="small"
                type="primary"
                onClick={handleSubmit}
                disabled={hasError}
              >
                {exactOkText}
              </Button>
              {/* 取消按钮 */}
              <Button type="normal" size="small" onClick={handleClose}>
                {exactCancelText}
              </Button>
            </S.EditorActions>
          </Form>
        </S.EditorWrapper>
      </S.SOverlay>
    </div>
  )
}

export default GetFusionConfig(
  withRcIntl({
    componentName: 'InlineEditor',
    defaultMessages,
    defaultLocaleMessages,
    warningIfNoMessageFromCtx: false,
  })(SimpleEditor)
)

export * from './utils'
