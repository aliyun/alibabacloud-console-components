import React, { useState, useCallback } from 'react'
import InlineEditor from '@alicloud/console-components-inline-editor'
import { reactIntlFactory } from '@alicloud/console-components-intl'

const intl = reactIntlFactory()

intl.set({
  locale: 'zh',
})

const BasicDemo: React.FC<{}> = () => {
  const [text, setText] = useState('文本')

  const handleSubmit = useCallback((value) => {
    console.log('text:', value)
    setText(value)
  }, [])

  return (
    <>
      <InlineEditor onSubmit={handleSubmit} minLength={2} maxLength={20}>
        {text}
      </InlineEditor>
    </>
  )
}

export default intl.withProvider()(BasicDemo)
