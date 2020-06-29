import React from "react"
import { css } from "@emotion/core"

import HeaderLogo from '../HeaderLogo'
import HeaderNav from '../HeaderNav'

import { pageWrap } from '../../utils/styles'

function AppHeader() {
  const logoStyles = css`
    flex: 0 0 auto;
  `

  const headerStyles = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 24px;
    padding-top: 24px;
    ${pageWrap}
  `

  return (
    <header css={headerStyles}>
      <div css={logoStyles}>
        <HeaderLogo />
      </div>

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
