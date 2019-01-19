import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css'

const Header = ({ siteTitle }) => (
  <section class="hero is-warning">
    <div class="hero-body is-paddingless">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <nav className="navbar" role="navigation" ariaLabel="main navigation">
            <div className="navbar-brand">
              <div className="navbar-item">
                <h1>ifmael</h1>
              </div>
              <a role="button" className="navbar-burger burger" aria-label="menu" ariaExpanded="false" dataTarget="navbarBasic">
                <span ariaHidden="true"></span>
                <span ariaHidden="true"></span>
                <span ariaHidden="true"></span>
              </a>
            </div>
            <div id="navbarBasic" className="navbar-menu">
              <div className="navbar-start">
              </div>
              <div className="navbar-end">
                <div class="navbar-item is-vertical-right">
                    <a>
                      Search
                    </a>
                    <a>
                      me
                    </a>
                    <a>
                      github
                    </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/*
*/