import React from "react"
import PropTypes from "prop-types"
import { ClassNames } from "@emotion/core"

import { Link } from "gatsby"

function HeaderNavItem({ text, to }) {

  return (
    <ClassNames>
      {({ css }) => (
        <Link
          to={to}
          className={css`color: white;`}
          activeClassName={css`text-decoration-style: double;`}
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
