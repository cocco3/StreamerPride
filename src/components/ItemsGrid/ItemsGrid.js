import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

function ItemsGrid({ children, gap, minWidth }) {
  const wrapStyles = css`
    display: grid;
    grid-gap: ${gap};
    grid-template-columns: repeat(auto-fill, minmax(${minWidth}, 1fr));
  `

  return (
    <div css={wrapStyles}>
      {children}
    </div>
  )
}

ItemsGrid.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.string,
  minWidth: PropTypes.string
}

ItemsGrid.defaultProps = {
  gap: 'clamp(12px, 5vw, 48px)',
  minWidth: '300px'
}

export default ItemsGrid
