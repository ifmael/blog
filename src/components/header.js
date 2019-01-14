import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div id="header"
    className="columns"
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div id="header-content" className="column is-8 is-offset-2">
      <div className="columns is-vcentered">
        <div id="header-logo"
          className="column is-half"
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div id="header-nav" className="column is-half" style={{color:`white`, textAlign: `right`}}>
          <div id="header-nav--search">Buscar</div>
          <div id="header-nav--about">Sobre mí</div>
          <div id="header-nav--github">Github</div>
        </div>
      </div>
    </div>
    
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
