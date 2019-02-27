import React from 'react'
import ArticuleBox from '../components/articule-box';
import { graphql, Link } from 'gatsby'

import Layout from './layout'

export default ({data, pageContext}) => {

  const posts = data.allMarkdownRemark.edges
  let previousButtom, nextButtom;
  if (pageContext.previousPage)
    previousButtom = <Link to={pageContext.previousPage}><button>{pageContext.previousPage}</button></Link>
  if (pageContext.nextPage)
    nextButtom = <Link to={pageContext.nextPage}><button>{pageContext.nextPage}</button></Link>

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
      {previousButtom}
      {nextButtom}
    </Layout>
  )
}

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
