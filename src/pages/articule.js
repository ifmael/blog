import React from 'react'

import Layout from '../components/layout'
import Articule from '../components/articule'

import 'bulma/css/bulma.css'
import './index.css';


export default class ArticulePage extends React.Component{
  render() {
    return (
      <Layout>
        <Articule></Articule>
      </Layout>
    )
  }
}
