import React from 'react'
import ArticuleBox from '../components/articule-box';
import NavigationPages from '../components/navigation-pages'
import { graphql } from 'gatsby'

import Layout from './layout'

export default ({data, pageContext}) => {

  const posts = data.allMarkdownRemark.edges
  return(
    <Layout>
      {posts.map( ({node})=> {
        return (
            <ArticuleBox 
              key={node.id} 
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              date={node.frontmatter.date}
              slug={node.fields.slug}
            ></ArticuleBox>
        )
      })}
      <NavigationPages
        previousPage = {pageContext.previousPage}
        nextPage = {pageContext.nextPage}
      />

    </Layout>
  )
}

// <NavigationPosts previousPage=""  nextPage="">

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!)
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }`
;
