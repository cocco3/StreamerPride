import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

function HeaderNav(props) {
  const {
    items
  } = props

  const ItemsNode = items.map((value, index) => {
    return (
      <li className="nav_listItem" key={index}>
        <Link
          to={value.to}
          className="nav_item"
          activeClassName="nav_item-active"
        >
          {value.text}
        </Link>
      </li>
    )
  })

  return (
    <nav className="nav">
      <ul className="nav_list">
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
