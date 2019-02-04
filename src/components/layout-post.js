import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer';
import './layout.css'


export default ({ data}) =>(
    <>
      <Header />
        <div>
          <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </div>
      <Footer />
    </>
)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title 
      }
    }
  }
`