import React from "react"
import Suggestions from './suggestions.js'

export default class Search extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      query: '',
      markdownFiles: props,
      resultFiltered: []
    }
  }

  filterResult(searchValue){
    const resultFiltered = [];
    this.state.markdownFiles.listFiles.forEach( item => {
      if( item.node.frontmatter.title.indexOf(searchValue) !== -1)
        resultFiltered.push(item);
    })
    this.setState({
      resultFiltered: resultFiltered
    })
  }

  handleInputChange = (event) =>{
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0){
          this.filterResult(this.search.value)
        }
      } else if(this.state && this.state.query.length === 0){
        this.setState({
          resultFiltered:[] 
        })
      }
    })
  }

  render(){
    return (
      <form>
        <input type="text" name="search" placeholder="Search..." 
          ref={input => this.search = input}
          onChange={this.handleInputChange.bind(this)}
        />
        <Suggestions listFiles={this.state.resultFiltered} />
      </form>
    )
  }
}

