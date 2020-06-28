import React from "react"
import { css } from "@emotion/core"

import HeaderNav from '../HeaderNav'
import logo from './logo.png'

function AppHeader() {
  const headerStyles = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  const imgStyles = css`
    height: 50px;
    margin: 0;
  `

  return (
    <header css={headerStyles}>

      <img css={imgStyles} src={logo} />
      
      <HeaderNav
        items={[
          { text: 'Home', to: '/' },
          { text: 'About', to: '/about' },
          { text: 'Members', to: '/members' },
          { text: 'Contact', to: '/contact' }
        ]}
      />
    </header>
  )
}

export default AppHeader
