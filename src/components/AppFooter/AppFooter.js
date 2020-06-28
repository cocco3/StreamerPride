import React from "react"
import { css } from "@emotion/core"

import { pageWrap } from '../../utils/styles'

import logo from './logo.png'

function AppFooter() {
  const footerStyles = css`
    align-items: center;
    background-color: #000000;
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    padding-bottom: 24px;
    padding-top: 24px;
    ${pageWrap}
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
