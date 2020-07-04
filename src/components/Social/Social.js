import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import ScreenReaderText from '../ScreenReaderText'

/* icons from https://simpleicons.org */
import SvgDiscord from './discord.inline.svg'
import SvgEmail from './email.inline.svg'
import SvgTwitter from './twitter.inline.svg'

function Social({ discord, email, twitter }) {
  const gridStyles = css`
    display: grid;
    grid-gap: clamp(12px, 5vw, 48px);
    grid-template-columns: repeat(auto-fit, 180px);
  `

  const linkStyles = css`
    &:hover {
      box-shadow: none;

      svg {
        fill: rgba(255, 255, 255, 0.8);
      }
    }
  `

  const svgStyles = css`
    fill: white;
  `

  return (
    <div css={gridStyles}>
      {discord && (
        <a
          href={discord}
          target="_blank"
          rel="noopener noreferrer"
          css={linkStyles}
        >
          <SvgDiscord css={svgStyles} />
          <ScreenReaderText>Discord</ScreenReaderText>
        </a>
      )}

      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          css={linkStyles}
        >
          <SvgTwitter css={svgStyles} />
          <ScreenReaderText>Twitter</ScreenReaderText>
        </a>
      )}

      {email && (
        <a
          href={email}
          target="_blank"
          rel="noopener noreferrer"
          css={linkStyles}
        >
          <SvgEmail css={svgStyles} />
          <ScreenReaderText>Email</ScreenReaderText>
        </a>
      )}
    </div>
  )
}

Social.propTypes = {
  discord: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string,
}

export default Social
