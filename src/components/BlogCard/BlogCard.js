import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Heading from '../Heading'

function BlogCard({ date, excerpt, image, title, to }) {
  const wrapStyles = css`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    padding: 16px;
  `

  return (
    <article css={wrapStyles}>
      {image}
      <header>
        <Heading level={3}>
          <Link to={to}>{title}</Link>
        </Heading>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      </section>
      <footer>
        <small>{date}</small>
      </footer>
    </article>
  )
}

BlogCard.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.node.isRequired,
  image: PropTypes.node,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default BlogCard
