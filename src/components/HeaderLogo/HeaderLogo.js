import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import logo from '../../../content/assets/logo.png'

import { visuallyHidden } from '../../utils/styles'

function HeaderLogo() {
  const logoStyles = css`
    a {
      display: block;
      box-shadow: none;
      text-decoration: none;
    }

    img {
      height: 50px;
      margin: 0;
    }

    span {
      ${visuallyHidden}
    }
  `

  return (
    <div css={logoStyles}>
      <Link to="/">
        <img src={logo} alt="StreamerPride logo" aria-hidden="true" />
        <span>Home</span>
      </Link>
    </div>
  )
}

export default HeaderLogo
