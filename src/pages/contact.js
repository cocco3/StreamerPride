import React from "react"

import { Heading, Layout, SEO } from "../components"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Heading level={1}>Get in Touch</Heading>
      <div>
        <a href="https://discord.streamerpride.network/">Discord</a>
      </div>
      <div>
        <a href="https://twitter.com/StreamerPride">Twitter</a>
      </div>
      <div>
        <a href="mailto:info@steamerpride.network">Email</a>
      </div>
    </Layout>
  )
}

export default Contact
