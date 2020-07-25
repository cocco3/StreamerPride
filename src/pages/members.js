import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  Heading,
  ItemsGrid,
  Layout,
  Member,
  PageHeading,
  SEO,
} from '../components'

const MembersIndex = ({
  data: {
    allMarkdownRemark: { edges: membersData },
  },
}) => {
  const MemberNode = ({ node: member }) => {
    const fluidImage = member.frontmatter.image?.childImageSharp.fluid
    const ImageNode = fluidImage && <Img fluid={fluidImage} />

    return (
      <Member
        key={member.frontmatter.name}
        description={member.html}
        image={ImageNode}
        name={member.frontmatter.name}
        pronouns={member.frontmatter.pronouns}
        twitchUrl={member.frontmatter.twitchUrl}
        twitterUrl={member.frontmatter.twitterUrl}
      />
    )
  }

  const FoundersNode = membersData
    .filter(({ node: member }) => member.frontmatter.founder)
    .map(MemberNode)

  const MembersNode = membersData
    .filter(({ node: member }) => !member.frontmatter.founder)
    .map(MemberNode)

  return (
    <Layout>
      <SEO title="Members" />
      <PageHeading>Our Members</PageHeading>

      <div style={{ margin: '3.75rem 0 1.75rem' }}>
        <Heading level={2}>Founders</Heading>
      </div>

      <ItemsGrid>
        {FoundersNode}
      </ItemsGrid>

      <div style={{ margin: '3.75rem 0 1.75rem' }}>
        <Heading level={2}>Members</Heading>
      </div>

      <ItemsGrid>
        {MembersNode}
      </ItemsGrid>
    </Layout>
  )
}

export default MembersIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/members/)/" } }
      sort: { fields: [frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            founder
            name
            pronouns
            twitchUrl
            twitterUrl
            image {
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
