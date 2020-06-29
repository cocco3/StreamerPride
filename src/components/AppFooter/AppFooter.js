import React from 'react'
import { css } from '@emotion/core'

import { pageWrap } from '../../utils/styles'

import logo from './logo.png'

function AppFooter() {
  const footerStyles = css`
    align-items: center;
    background-color: #000000;
    display: flex;
    color: #ffffff;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 48px;
    padding-bottom: 24px;
    padding-top: 24px;
    ${pageWrap}
  `

  const imgStyles = css`
    height: 100px;
    margin: 0;
  `

  const textStyles = css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 2px;
    max-width: 400px;
    padding: 12px 0;
  `

  return (
    <footer css={footerStyles}>
      <img
        css={imgStyles}
        src={logo}
        alt="StreamerPride logo"
        aria-hidden="true"
      />
      <div css={textStyles}>
        Standing together to support LGBTQ+ streamers worldwide
      </div>
    </footer>
  )
}

export default AppFooter
