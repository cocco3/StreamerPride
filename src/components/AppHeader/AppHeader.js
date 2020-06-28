import React from "react"
import { css } from "@emotion/core"

import HeaderLogo from '../HeaderLogo'
import HeaderNav from '../HeaderNav'

import { pageWrap } from '../../utils/styles'

function AppHeader() {
  const headerStyles = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${pageWrap}
  `

  return (
    <header css={headerStyles}>
      <HeaderLogo />

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
