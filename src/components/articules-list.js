import React from 'react'
import ArticuleBox from './articule-box';


export default class ArticuleList extends React.Component {

  render() {
    return (
      <div  className="columns ">
        <div className="column is-8 is-offset-2">
          <ArticuleBox></ArticuleBox>
          <ArticuleBox></ArticuleBox>
          <ArticuleBox></ArticuleBox>
          <ArticuleBox></ArticuleBox>
          <br></br>
        </div>
      </div>
    );
  }
}

/*const ArticulesList = ({ children }) => (
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

*/