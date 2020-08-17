import React from "react"
import headerStyles from "./header.module.css"

export default props => (
  <header className={headerStyles.header}>{props.title}</header>
)
