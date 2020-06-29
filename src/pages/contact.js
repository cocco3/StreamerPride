import React from 'react'

import { Heading, Layout, SEO, Social } from '../components'

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Heading level={1}>Get in Touch</Heading>

      <Social
        discord="https://discord.streamerpride.network"
        email="mailto:info@steamerpride.network"
        twitter="https://twitter.com/StreamerPride"
      />
    </Layout>
  )
}

export default Contact
