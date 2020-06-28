import React from "react"
import { Global, css } from "@emotion/core"

import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'

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
          }
        `}
      />
      <div css={pageStyles}>
        <div css={headerStyles}>
          <AppHeader />
        </div>
        <div css={mainStyles}>
          <main>{children}</main>
        </div>
        <div css={footerStyles}>
          <AppFooter />
        </div>        
      </div>
    </>
  )
}

export default Layout
