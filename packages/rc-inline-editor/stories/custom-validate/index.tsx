import React, { useState, useCallback } from 'react'
import InlineEditor from '@alicloud/console-components-inline-editor'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

intl.set({
  locale: 'zh',
})

const CustomValidate: React.FC<{}> = () => {
  const [text, setText] = useState('文本')

  const handleSubmit = useCallback((value) => {
    console.log('text:', value)
    setText(value)
  }, [])

  return (
    <>
      <InlineEditor
        onSubmit={handleSubmit}
        validateRegExp={
          /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
        }
        invalidText="邮箱格式不正确"
        tipFormatText="请输入您的邮箱"
      >
        {text}
      </InlineEditor>
    </>
  )
}

export default intl.withProvider()(CustomValidate)
