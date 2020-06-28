import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

function Member({
  name,
  pronouns,
  description
 }) {

  const nameStyles = css`
    border-bottom: 1px solid white;
  `

  return (
    <div>
      <div css={nameStyles}>{name}</div>
      <div>{pronouns}</div>
      <div>{description}</div>
    </div>
  )
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  pronouns: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Member
