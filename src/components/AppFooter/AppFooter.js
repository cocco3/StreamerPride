import React from "react"
import { css } from "@emotion/core"

import logo from './logo.png'

function AppFooter() {
  const footerStyles = css`
    align-items: center;
    background-color: #000000;
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    padding: 24px;
  `

  const imgStyles = css`
    height: 100px;
    margin: 0;
  `

  return (
    <footer css={footerStyles}>
      <img css={imgStyles} src={logo} alt="StreamerPride logo" aria-hidden="true" />
      <div>
        Standing together to support LGBTQ+ streamers worldwide
      </div>
    </footer>
  )
}

export default AppFooter
