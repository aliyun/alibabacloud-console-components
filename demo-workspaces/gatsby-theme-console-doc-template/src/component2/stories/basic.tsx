import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid gray;
  color: red;
`;

const Example: React.FC<{}> = () => {
  return (
    <p>
      This is a React demo: <StyledButton>button</StyledButton>
    </p>
  );
};

export default Example;
