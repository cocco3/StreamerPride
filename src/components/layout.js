import React from "react"

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const Layout = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  )
}

export default Layout
