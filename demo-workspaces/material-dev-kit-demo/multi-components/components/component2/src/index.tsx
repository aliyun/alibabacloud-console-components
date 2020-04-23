import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid gray;
  color: green;
`

/**
 * @public
 */
const MyButton2: React.FC<IMyButton2Props> = ({
  text2 = 'hello world',
  onClick2,
}) => {
  return <StyledButton onClick={onClick2}>{text2}</StyledButton>
}

export default MyButton2

/**
 * @public
 */
export interface IMyButton2Props {
  /**
   * button展示的文字<br />
   * tsdoc不支持markdown格式的加粗（语法解析会出现冲突），如果必须使用粗体，请直接使用HTML tag： <b>markdown</b>（html tag还支持传classname和style）。 <br />
   * test `code`
   *
   * @defaultValue
   * test <em style="color:red;">markdown</em>.<br />
   * 测试链接1 {@link IMyButton2Props.onClick2 | props.onClick2 }
   */
  text2?: string
  /**
   * 点击按钮的回调 <br />
   * 测试链接2 {@link IMyButton2Props.text2 | props.text2 }
   */
  onClick2?: (e: React.MouseEvent) => void
}
