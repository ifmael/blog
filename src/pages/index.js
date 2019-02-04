import React from 'react'

import Layout from '../components/layout'
import 'bulma/css/bulma.css'
import './index.css';
//import './debug.css'
//import GlobalLayout from '../layouts/global-layout'
import ArticulesList from '../components/articules-list';

export default class Index extends React.Component{
  render() {
    return (
      <Layout>
        <ArticulesList>
        </ArticulesList>
      </Layout>
    )
  }
}
