import React from "react"
import Suggestions from '../suggestions.js'
// import { changeSearch, addResulFiltered, emptyResultFilter } from '../../state/actionsCreators'
import { changeSearch, addResulFiltered, emptyResultFilter } from './state/actionsCreator'
import { connect } from 'react-redux'

const SearchTemplate = ({listFiles, resultFiltered, boundChangeSearch, boundResulFiltered, boundEmptyResultFilter}) => {
  const filterResult = (searchValue) =>{
    const newResultFiltered = [];
    listFiles.forEach( item => {
      const titleLowerCase = item.node.frontmatter.title.toLocaleLowerCase();
      if( titleLowerCase.indexOf(searchValue.toLowerCase()) !== -1)
        newResultFiltered.push(item);
    })
    boundResulFiltered(newResultFiltered);
  }

  const handleInputChange = (event) =>{
    event.preventDefault();
    boundChangeSearch(event.target.value);
    if (event.target.value.length > 1) {
      if (event.target.value.length % 2 === 0) {
        filterResult(event.target.value)
      }
    } else if( event.target.value.length === 0 ){
      boundEmptyResultFilter();
    }
  }

  return (
    <form>
      <input type="text" name="search" placeholder="Search..." 
        onChange={event => handleInputChange(event)}
      />
      <Suggestions listFiles={resultFiltered} />
    </form>
  );
}

const mapStateToProps = ({state}) => {
  const { resultFiltered } = state;
  return { resultFiltered };
}

const mapDispatchToProps = dispatch => {
  return { 
    boundChangeSearch: (query) => {
      dispatch( changeSearch(query) ) 
    },
    boundResulFiltered: (resultFiltered) => {
      dispatch( addResulFiltered(resultFiltered) )
    },
    boundEmptyResultFilter: () => {
      dispatch( emptyResultFilter())
    }
  }
}

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTemplate);

export default (props) => {
  return ( <ConnectedSearch {...props} />)
}

