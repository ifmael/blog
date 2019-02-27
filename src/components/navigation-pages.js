import { Link } from 'gatsby'
import React from 'react'
import './navigation-pages.css'


function buildButton(link, text){
  return (
    <Link to={link}>
      <button className="button is-link">{text}</button>
    </Link>
  );
}

export default ({previousPage, nextPage}) => {
  const previousButton = previousPage !== undefined ? buildButton(previousPage, '<< Previous') : '';
  const nextButton = nextPage !== undefined ? buildButton(nextPage, 'Next >>') : '';
  return (
    <div className="columns center-content">
        {previousButton}
        {nextButton}
    </div>
  );
}