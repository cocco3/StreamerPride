import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

function ScreenReaderText({ children }) {
  const styles = css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `

  return <span css={styles}>{children}</span>
}

ScreenReaderText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScreenReaderText
