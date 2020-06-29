import React from 'react'
import { css } from '@emotion/core'

import { pageWrap } from '../../utils/styles'

function AppMain({ children }) {
  const wrapStyles = css`
    ${pageWrap}
  `

  return <main css={wrapStyles}>{children}</main>
}

export default AppMain
