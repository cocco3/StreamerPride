import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

function Member({ image, name, pronouns, description, twitchUrl, twitterUrl }) {
  const headingStyles = css`
    border-bottom: 1px solid #dddddd;
    margin-bottom: 16px;
    padding-bottom: 16px;
  `

  const TwitterNode = twitterUrl && (
    <div>
      <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
        Twitter
      </a>
    </div>
  )

  return (
    <div>
      <div css={headingStyles}>
        {image}

        <div>
          <a href={twitchUrl} rel="noopener noreferrer" target="_blank">
            {name}
          </a>
        </div>

        {pronouns}
      </div>

      <div>{description}</div>

      {TwitterNode}
    </div>
  )
}

Member.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.node,
  name: PropTypes.string.isRequired,
  pronouns: PropTypes.string.isRequired,
  twitchUrl: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string,
}

export default Member
