import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid gray;
  color: blue;
`

/**
 * @public
 */
const MyButton: React.FC<IMyButtonProps> = ({
  text = 'hello world',
  onClick,
}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default MyButton

/**
 * @public
 */
export interface IMyButtonProps {
  /**
   * button展示的文字<br />
   * tsdoc不支持markdown格式的加粗（语法解析会出现冲突），如果必须使用粗体，请直接使用HTML tag： <b>markdown</b>（html tag还支持传classname和style）。 <br />
   * test `code`
   *
   * @defaultValue
   * test <em style="color:red;">markdown</em>.<br />
   * 测试链接1 {@link IMyButtonProps.onClick | props.onClick }
   */
  text?: string
  /**
   * 点击按钮的回调 <br />
   * 测试链接2 {@link IMyButtonProps.text | props.text }
   */
  onClick?: (e: React.MouseEvent) => void
  testProp: number
}
