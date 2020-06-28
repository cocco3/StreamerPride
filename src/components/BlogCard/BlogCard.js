import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

function BlogCard({
  date,
  excerpt,
  title,
  to,
 }) {

  const wrapStyles = css`
    background: #ffffff;
    color: #303030;
    padding: 16px;
  `

  return (
    <article css={wrapStyles}>
      <header>
        <h3>
          <Link to={to}>
            {title}
          </Link>
        </h3>
        <small>{date}</small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      </section>
  </article>
  )
}

BlogCard.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default BlogCard
