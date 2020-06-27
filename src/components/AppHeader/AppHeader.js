import React from "react"

import HeaderNav from '../HeaderNav'

function AppHeader() {
  return (
    <header>

      <img src="Reg3.png" />
      
      <HeaderNav
        items={[
          { text: 'Home', to: '/' },
          { text: 'About', to: '/about' },
          { text: 'Members', to: '/members' },
          { text: 'Layout', to: '/layout' }
        ]}
      />
    </header>
  )
}

export default AppHeader
