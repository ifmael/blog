import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer';
// import './layout.css'


import 'bulma/css/bulma.css'
import './index.css';

export default ({ children }) => (
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