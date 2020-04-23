import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid gray;
  color: red;
`

/**
 * @public
 */
const MyButton1: React.FC<IMyButton1Props> = ({
  text1 = 'hello world',
  onClick1,
}) => {
  return <StyledButton onClick={onClick1}>{text1}</StyledButton>
}

export default MyButton1

/**
 * @public
 */
export interface IMyButton1Props {
  /**
   * button展示的文字<br />
   * tsdoc不支持markdown格式的加粗（语法解析会出现冲突），如果必须使用粗体，请直接使用HTML tag： <b>markdown</b>（html tag还支持传classname和style）。 <br />
   * test `code`
   *
   * @defaultValue
   * test <em style="color:red;">markdown</em>.<br />
   * 测试链接1 {@link IMyButton1Props.onClick1 | props.onClick1 }
   */
  text1?: string
  /**
   * 点击按钮的回调 <br />
   * 测试链接2 {@link IMyButton1Props.text1 | props.text1 }
   */
  onClick1?: (e: React.MouseEvent) => void
}
