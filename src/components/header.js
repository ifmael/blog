import React from 'react'
import { connect } from 'react-redux'
import { graphql, StaticQuery } from 'gatsby'
import './header.css'
import Search from './search.js'
import { addMarkdownFiles } from '../state/actionsCreators'

const HeaderTemplate = ({ boundAddMarkdownFiles, articules }) => {
  boundAddMarkdownFiles(articules.allMarkdownRemark.edges);
  return (
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
                      <Search/>
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
)};

const mapStateToProps = ({markdownFiles}) => {
  return { markdownFiles }
}

const mapDispatchToProps = dispatch => {
  return { 
    boundAddMarkdownFiles: (markdownFiles) => {
      dispatch( addMarkdownFiles(markdownFiles) ) 
    }
  }
}

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderTemplate)


export default (props) =>{
  return (
    <StaticQuery
      query={graphql`
        query listMarkDownFiles{
          allMarkdownRemark {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render= {
        data =>{
          return (
            <ConnectedHeader articules={data} {...props} />
        )}
      }
    />
  )
} 


