import React from 'react'

import 'bulma/css/bulma.css'
import './index.css';
//import './debug.css'

import ArticulesList from '../layouts/articules-list';

export default class Index extends React.Component{
  render() {
    return (
        <ArticulesList/>
    )
  }
}

/*

      <Layout>
        <ArticulesList>
        </ArticulesList>
      </Layout> */