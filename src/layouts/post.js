import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default ({ data }) =>{
  console.log(`data: ${data}`)
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    </Layout>
  )
}

export const query = graphql`
  query blogPostsQuery($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title 
      }
    }
  }
`