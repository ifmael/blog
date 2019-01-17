import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.css'

const Header = ({ siteTitle }) => (
  <section class="hero is-warning">
    <div class="hero-body is-paddingless">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <nav className="navbar" role="navigation">
            <div className="navbar-brand">
              <div className="navbar-item is-paddingless">
                <h1>ifmael</h1>
              </div>
              <a role="button" className="navbar-burguer burguer" dataTarget="navbarBasicExample">
                  <span ariaHidden="true" />
                  <span ariaHidden="true" />
                  <span ariaHidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
              </div>
              <div className="navbar-end">
                <a className="navbar-item">Home</a>
                <a className="navbar-item">Documentation</a>
                <a className="navbar-item is-paddingless">More</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
)

/*
    <section >
    <div classNameName="hero-body is-paddingless">
      <div classNameName="columns">
        <div className="column is-8 is-offset-2">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                />
              </a>

              <a
                role="button"
                classNameName="navbar-burger burger"
                ariaLabel="menu"
                ariaExpanded="false"
                dataTarget="navbarBasicExample"
              >
                <span ariaHidden="true" />
                <span ariaHidden="true" />
                <span ariaHidden="true" />
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>

                <a className="navbar-item">Documentation</a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">More</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Jobs</a>
                    <a className="navbar-item">Contact</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Report an issue</a>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/*   <section classNameName="hero is-warning">
    <div classNameName="hero-body">
      <div classNameName="container">
        <div classNameName="level is-mobile">
          <div classNameName="level-left">
            <div classNameName="level-item">
              <h1 classNameName="title">ifmael</h1>
            </div>
          </div>
          <div classNameName="level-right">
            <div classNameName="level-item"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
*/
