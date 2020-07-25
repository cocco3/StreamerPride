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

import membersData from '../data/members'

const getFluidImageFromResults = function (results, key) {
  const foundImage = results.edges.find(x => {
    return (
      x.node.childImageSharp &&
      x.node.childImageSharp.fluid.originalName.indexOf(key) > -1
    )
  })

  return foundImage.node.childImageSharp.fluid
}

const MembersIndex = ({ data }) => {
  const MemberNode = (member) => {
    const fluidImage = getFluidImageFromResults(data.memberImages, member.name)
    const ImageNode = fluidImage && <Img fluid={fluidImage} />

    return (
      <Member
        key={member.name}
        description={member.description}
        image={ImageNode}
        name={member.name}
        pronouns={member.pronouns}
        twitchUrl={member.twitchUrl}
        twitterUrl={member.twitterUrl}
      />
    )
  }

  const FoundersNode = membersData
    .filter(x => x.founder)
    .map(MemberNode)

  const MembersNode = membersData
    .filter(x => !x.founder)
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
    memberImages: allFile(filter: { absolutePath: { regex: "/members/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
