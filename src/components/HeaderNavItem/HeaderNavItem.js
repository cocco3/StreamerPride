import React from "react"
import PropTypes from "prop-types"
import { ClassNames } from "@emotion/core"

import { Link } from "gatsby"

function HeaderNavItem({ text, to }) {

  const activeStyles = `
    box-shadow: 0 1px 0 0 currentColor;
    color: white;
  `

  const linkStyles = `
    box-shadow: none;
    color: rgba(255, 255, 255, 0.75);
    font-family: Cabin;
    font-weight: 700;
    transition-duration: 0.2s;
    transition-property: color, box-shadow;
    transition-timing-function: ease;

    &:hover {
      ${activeStyles}
    }
  `

  return (
    <ClassNames>
      {({ css }) => (
        <Link
          to={to}
          className={css(linkStyles)}
          activeClassName={css(activeStyles)}
        >
          {text}
        </Link>
      )}
    </ClassNames>
  )
}

HeaderNavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default HeaderNavItem
