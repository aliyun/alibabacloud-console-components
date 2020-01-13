import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid gray;
  color: blue;
`;

/**
 * @public
 */
const MyButton: React.FC<IMyButtonProps> = ({
  text = "hello world",
  onClick
}) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default MyButton;

/**
 * @public
 */
export interface IMyButtonProps {
  /**
   * button展示的文字
   * @defaultValue 'hello world'
   */
  text?: string;
  /**
   * 点击按钮的回调
   */
  onClick?: (e: React.MouseEvent) => void;
}
