import React from "react"

import { Heading, Layout, Member } from "../components"

const membersData = [
  {
    founder: true,
    name: 'CaptainFel',
    pronouns: 'He/Him',
    description: 'Captain, or Kevin, enjoys playing and streaming RPG and action-adventure video games. Escapism via engaging stories is what got him into gaming as a child and he loves sharing these stories with his viewers. His favourite part of streaming is the community and he is one of the co-founders of SPN. He is also a massive fantasy novel, D&D, and crafting nut. Kevin lives in San Francisco with his two husbands and their dog, Dakota.'
  },
  {
    founder: true,
    name: 'hutchinsane_',
    pronouns: 'He/Him',
    description: 'Hutch streams pretty much whatever he currently likes, but he has a special connection to the “The Legend of Zelda” series. He started streaming as a way to find some structure, and found it can be quite fun! He’s currently a full-time student working on a Bachelor’s in Computing & IT. He’s one of the network’s co-founders and tries to help people with technology wherever he can. He currently lives with his family in Luxembourg, with their two cats, Pandora & Merlin.'
  },
  {
    name: 'blizzb3ar',
    pronouns: 'He/Him',
    description: 'Malik, or Blizz, is a variety streamer from the US who focuses on “just having a good time”. He started his gaming journey at a young age, playing Pokémon Crystal on his purple Game Boy Advance. Since then, he’s been finding joy from games that are lesser known, but still have heart. When he isn’t streaming, you can usually find him being a goof on social media or constantly editing episodes for his podcast. His overall streaming goal is to make sure anyone who walks into the chat feels like they are in a safe and friendly environment.'
  }
]

const Members = ({ data, location }) => {

  const MemberNode = (member) => (
    <Member
      key={member.name}
      name={member.name}
      pronouns={member.pronouns}
      description={member.description}
    />
  )

  const FoundersNode = membersData
    .filter(x => x.founder)
    .map(MemberNode)

  const MembersNode = membersData
    .filter(x => !x.founder)
    .map(MemberNode)

  return (
    <Layout>
      <Heading level={1}>Our Members</Heading>

      <Heading level={2}>Founders</Heading>
      {FoundersNode}

      <Heading level={2}>Members</Heading>
      {MembersNode}
    </Layout>
  )
}

export default Members