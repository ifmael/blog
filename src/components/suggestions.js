import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';

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

Suggestions.protoTypes = {
  listFiles: PropTypes.asd
}


export default Suggestions
