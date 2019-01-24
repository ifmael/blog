import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer';
import ArticulesList from './articules-list';
import './layout.css'

export default class Layout extends React.Component {
  
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <Header siteTitle={data.site.siteMetadata.title} />
                {children}
              <Footer></Footer>
            </>
          )
        }}
      />
    )
  }
}

/* const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ArticulesList>
          {children}
        </ArticulesList>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout */

