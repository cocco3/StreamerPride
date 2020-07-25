import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  BlogCard,
  Hero,
  ItemsGrid,
  Layout,
  PageHeading,
  SEO,
} from '../components'

import logo from '../components/AppFooter/logo.png'

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  const PostsNode = posts.map(({ node }) => {
    const excerpt = node.frontmatter.description || node.excerpt
    const title = node.frontmatter.title || node.fields.slug

    const fluidImage = node.frontmatter.featuredImage?.childImageSharp.fluid
    const ImageNode = fluidImage && <Img fluid={fluidImage} />

    return (
      <BlogCard
        key={node.fields.slug}
        date={node.frontmatter.date}
        excerpt={excerpt}
        image={ImageNode}
        title={title}
        to={node.fields.slug}
      />
    )
  })

  return (
    <Layout>
      <SEO title="Home" />

      <Hero
        image={<img src={logo} alt="StreamerPride logo" aria-hidden="true" />}
        text="Standing together to support LGBTQ+ streamers worldwide"
      />

      <PageHeading>
        What's on Deck
      </PageHeading>

      <ItemsGrid>
        {PostsNode}
      </ItemsGrid>

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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/blog/)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
