import React from "react"

function Heading({ level, children }) {
  const ElementName = `h${level}`

  return (
    <ElementName>
      {children}
    </ElementName>
  )
}

export default Heading
