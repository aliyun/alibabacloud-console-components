import { useLayoutEffect, useState } from 'react'

const INITIAL_VALUE = Symbol('initial value identifer for useValueWatcher')

/**
 * 当value改变时，通过onChange通知。
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useValueWatcher = <Value>({
  value,
  onChange,
  judgeChange,
  onInit,
}: {
  value: Value
  onChange: (prev: Value, current: Value) => void
  // by default use !== to judge value change
  judgeChange?: (prev: Value, current: Value) => boolean
  onInit?: (current: Value) => void
}) => {
  // NaN is not equal to anything, including NaN.
  // so onChange is guaranteed to be call on the first effect(on mounted)
  // unless judgeChange return false
  const [lastValue, setLastValue] = useState(
    (INITIAL_VALUE as unknown) as Value
  )
  useLayoutEffect(() => {
    if (lastValue === ((INITIAL_VALUE as unknown) as Value)) {
      setLastValue(value)
      onInit && onInit(value)
    } else if (
      typeof judgeChange === 'function'
        ? judgeChange(lastValue, value)
        : lastValue !== value
    ) {
      onChange(lastValue, value)
      setLastValue(value)
    }
  }, [value, judgeChange, lastValue, onChange, onInit])
}
useValueWatcher.INITIAL_VALUE = INITIAL_VALUE

/**
 * - 当data改变时，会记录transition的开始（并发出`onStarted`事件）。
 * - 当useTransitionController返回的回调函数（`returnVal[1]`）被调用时，会记录transition的完成（并发出`onCompleted`事件）。
 * - 如果上一个transition还没有完成，data又改变了，会发出transition的取消事件（`onCancled`）。
 */
export const useTransitionController = <Data>({
  onStarted,
  onCancled,
  onCompleted,
  data,
}: {
  onStarted?: (startedData: Data) => void
  onCancled?: (cancledData: Data, newData: Data) => void
  onCompleted?: (completedData: Data) => void
  data: Data
}): [boolean, () => void] => {
  const [inTransition, setInTransition] = useState(false)

  useValueWatcher({
    value: data,
    onChange: (prev, current) => {
      if (inTransition) {
        onCancled && onCancled(prev, current)
      }
      onStarted && onStarted(current)
      setInTransition(true)
    },
  })

  useValueWatcher({
    value: inTransition,
    onChange: (prev, current) => {
      if (prev === true && current === false) {
        onCompleted && onCompleted(data)
      }
    },
  })

  return [
    inTransition,
    () => {
      if (!inTransition) {
        return
      }
      setInTransition(false)
    },
  ]
}
