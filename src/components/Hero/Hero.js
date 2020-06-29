import React from 'react'
import { css } from '@emotion/core'

function Heading({ image, text }) {
  const wrapStyles = css`
    align-items: center;
    display: flex;
    flex-direction: column;
  `

  const imgStyles = css`
    margin: 0 auto;
  `

  const textStyles = css`
    font-family: Montserrat;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 2px;
  `

  return (
    <div css={wrapStyles}>
      <div css={imgStyles}>{image}</div>
      <div css={textStyles}>{text}</div>
    </div>
  )
}

export default Heading
