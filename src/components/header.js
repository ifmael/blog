// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import './header.css'

export default () => (
  <section className="hero is-warning">
    <div className="hero-body is-paddingless">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <div className="navbar-item">
                <h1>ifmael</h1>
              </div>
              <a role="button" href="/" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarBasic" className="navbar-menu">
              <div className="navbar-start">
              </div>
              <div className="navbar-end">
                <div className="navbar-item is-vertical-right">
                    <a href="/">
                      Search
                    </a>
                    <a href="/">
                      me
                    </a>
                    <a href="/">
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
