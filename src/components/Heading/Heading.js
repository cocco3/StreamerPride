import React from "react"
import { css } from "@emotion/core"

function Heading({ level, children }) {
  const ElementName = `h${level}`

  let fontSize
  switch(level) {
    case 1:
      fontSize = '2.6rem'
      break;
    case 2:
      fontSize = '1.6rem'
      break;
    case 2:
      fontSize = '1.3rem'
      break;
    default:
      fontSize = '1rem'
  }

  const styles = css`
    font-family: Montserrat, "system-ui";
    font-size: ${fontSize};
    font-weight: 700;
    line-height: 1.2;
  `

  return (
    <ElementName css={styles}>
      {children}
    </ElementName>
  )
}

export default Heading
