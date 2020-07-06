import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import { Heading, Layout, Member, PageHeading, SEO } from '../components'

const MembersIndex = ({
  data: {
    allMarkdownRemark: { edges: membersData }
  }
}) => {
  const wrapStyles = css`
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `

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
        <Heading level={2}>
          Founders
        </Heading>
      </div>

      <div css={wrapStyles}>{FoundersNode}</div>

      <div style={{ margin: '3.75rem 0 1.75rem' }}>
        <Heading level={2}>
          Members
        </Heading>
      </div>

      <div css={wrapStyles}>{MembersNode}</div>
    </Layout>
  )
}

export default MembersIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(/members/)/"  }},
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
