import React from "react"
import Img from 'gatsby-image'
import { css } from "@emotion/core"

import { Heading, Layout, Member, SEO } from "../components"
import membersData from '../data/members'
import getImageFromResults from '../utils/getImageFromResults'

const Members = ({ data, location }) => {

  const wrapStyles = css`
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat( auto-fill, minmax(270px, 1fr) );
  `

  const MemberNode = (member) => {
    const fluidImage = getImageFromResults(data.memberImages, member.name)

    const ImageNode = fluidImage && (
      <Img fluid={fluidImage.node.childImageSharp.fluid} />
    )

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
      <Heading level={1}>Our Members</Heading>

      <Heading level={2}>Founders</Heading>
      <div css={wrapStyles}>
        {FoundersNode}
      </div>

      <Heading level={2}>Members</Heading>
      <div css={wrapStyles}>
        {MembersNode}
      </div>
    </Layout>
  )
}

export default Members

export const pageQuery = graphql`
  query {
    memberImages: allFile(filter: {absolutePath: {regex: "/members/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid,
              originalName
            }
          }
        }
      }
    }
  }
`
