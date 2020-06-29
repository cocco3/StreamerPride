import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import { BlogCard, Heading, Hero, Layout, SEO } from "../components"

import logo from '../components/AppFooter/logo.png'

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const wrapStyles = css`
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
  `

  const PostsNode = posts.map(({ node }) => {
    const excerpt = node.frontmatter.description || node.excerpt
    const title = node.frontmatter.title || node.fields.slug

    return (
      <BlogCard
        key={node.fields.slug}
        date={node.frontmatter.date}
        excerpt={excerpt}
        title={title}
        to={node.fields.slug}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        image={(<img src={logo} />)}
        text="Standing together to support LGBTQ+ streamers worldwide"
      />
      <Heading level={1}>What's on Deck</Heading>
      <div css={wrapStyles}>
        {PostsNode}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
