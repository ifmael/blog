import React from 'react'
import { Link } from 'gatsby'

const Suggestions = ({listFiles}) => {
  if (Array.isArray(listFiles) & listFiles.length > 0){
    const options = listFiles.map(element => (
      <li key={element.node.id}>
        <Link to={`/articules/${element.node.fields.slug}`}>
          {element.node.frontmatter.title}
        </Link>
      </li>
    ))
    return <ul>{options}</ul>
  }
  else
    return (<></>)
}

export default Suggestions
