import React from 'react'
import ArticuleBox from './articule-box';

const ArticulesList = ({ children }) => (
  <div  className="columns ">
    <div className="column is-8 is-offset-2">
      <ArticuleBox></ArticuleBox>
      <ArticuleBox></ArticuleBox>
      <ArticuleBox></ArticuleBox>
      <ArticuleBox></ArticuleBox>
      <br></br>
      {children}
    </div>
  </div>
)


export default ArticulesList;

