import React from 'react'
import { Global, css } from '@emotion/core'

import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'
import AppMain from '../AppMain'

const Layout = ({ children }) => {
  const pageStyles = css`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
  `

  const headerStyles = css`
    flex: 0 0 auto;
  `

  const mainStyles = css`
    flex: 1 0 auto;
  `

  const footerStyles = css`
    flex: 0 0 auto;
  `

  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #39318a;
            color: white;
            font-family: Roboto, 'system-ui';
          }

          a {
            box-shadow: none;
            color: #f0cf46;
          }

          a:hover {
            box-shadow: 0 1px 0 0 currentColor;
          }
        `}
      />
      <div css={pageStyles}>
        <div css={headerStyles}>
          <AppHeader />
        </div>
        <div css={mainStyles}>
          <AppMain>{children}</AppMain>
        </div>
        <div css={footerStyles}>
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default Layout
