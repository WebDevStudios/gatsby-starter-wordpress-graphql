import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { colors } from '../config/styles';

console.log(colors);

const Wrapper = styled('div')`
  padding: 10px;
  background: ${ colors.test };
`
export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
        
          color: white;
        }
      `}
    />
    {children}
  </Wrapper>
)