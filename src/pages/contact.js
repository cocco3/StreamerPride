import React from 'react'

import { Layout, PageHeading, SEO, Social } from '../components'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <PageHeading>Get in Touch</PageHeading>

      <Social
        discord="https://discord.streamerpride.network"
        email="mailto:info@steamerpride.network"
        twitter="https://twitter.com/StreamerPride"
      />
    </Layout>
  )
}

export default Contact
