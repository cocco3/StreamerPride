import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import HeaderNavItem from '../HeaderNavItem'

function HeaderNav({ items }) {

  const ulStyles = css`
    display: flex;
    margin: 0;
    padding: 0;
  `

  const liStyles = css`
    display: block;
    margin: 0;
    padding: 0;

    & + li {
      margin-left: clamp(8px, 4vw, 48px);
    }
  `

  const ItemsNode = items.map((value, index) => {
    return (
      <li css={liStyles} key={index}>
        <HeaderNavItem
          text={value.text}
          to={value.to}
        />
      </li>
    )
  })

  return (
    <nav>
      <ul css={ulStyles}>
        {ItemsNode}
      </ul>
    </nav>
  )
}

HeaderNav.propTypes = {
  items: PropTypes.array
}

HeaderNav.defaultProps = {
  items: []
}

export default HeaderNav
