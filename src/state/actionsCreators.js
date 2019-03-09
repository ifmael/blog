import * as actions from './actions'

export const changeSearch = search => {
  return { type: actions.CHANGE_SEARCH, search }
};

export const addMarkdownFiles = markdownFiles => {
  debugger;
  return { type: actions.ADD_MARKDOWNFILES, markdownFiles }
}

export const addResulFiltered = resultFiltered => {
  return { type: actions.ADD_RESULT_FILTERED, resultFiltered }
}

export const emptyResultFilter = () =>{
  return { type: actions.EMPTY_RESULT_FILTER, resultFiltered: emptyResultFilter }
}