import React from "react"
import { Global, css } from "@emotion/core"

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'



const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: #39318a;
            color: white;
          }
        `}
      />
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  )
}

export default Layout
