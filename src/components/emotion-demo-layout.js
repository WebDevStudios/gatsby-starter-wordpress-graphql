import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
const Wrapper = styled("div")`
  border: 2px solid green;
  padding: 10px;
`
export default ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: red;
          color: white;
        }
      `}
    />
    {children}
  </Wrapper>
)