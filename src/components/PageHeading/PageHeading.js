import React from 'react'
import { css } from '@emotion/core'

import Heading from '../Heading'

function PageHeading({ children }) {
  const styles = css`
    margin: 3.5rem 0 1.75rem;
  `

  return (
    <div css={styles}>
      <Heading level={1}>
        {children}
      </Heading>
    </div>
  )
}

export default PageHeading
