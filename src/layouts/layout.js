import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/ifm-header/header'
import Footer from '../components/footer';
import PropTypes from 'prop-types';
// import './layout.css'


import 'bulma/css/bulma.css'
import './index.css';

const Layout = ({ children }) => (
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
            <div  className="columns ">
              <div className="column is-8 is-offset-2">
                {children}
              </div>
            </div>
          <Footer />
        </>
      )
    }}
  />
)
Layout.propropTypes = {
  children: PropTypes.boolean
}

export default Layout;