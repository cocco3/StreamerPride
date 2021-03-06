import React from 'react'
import { css } from '@emotion/core'

import { Layout, PageHeading, SEO } from '../components'

const About = () => {
  const wrapStyles = css`
    max-width: 700px;
  `

  return (
    <Layout>
      <SEO title="About" />
      <PageHeading>About Us</PageHeading>
      <div css={wrapStyles}>
        <p>
          StreamerPride Network is a group of LGBTQ+ streamers from around the
          world. We aim to create a safe, welcoming, and supportive environment
          where we learn, grow, and connect. We stand together in pride and
          welcome all parts of the rainbow. We provide a network of mutual
          support and bring opportunities for growth, learning, and friendship
          to new and established streamers alike.
        </p>
      </div>
    </Layout>
  )
}

export default About
