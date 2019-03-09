import * as actions from './actions'

// Initial state
const initialState = {
  search: '',
  markdownFiles: [],
  resultFiltered: []
};

// Reducer
export default (state = initialState, action) => {
  debugger
  switch (action.type) {
    case actions.CHANGE_SEARCH:
      return { ...state, search: action.search }
    case actions.ADD_MARKDOWNFILES:
      return { ...state, markdownFiles: [...action.markdownFiles] }
    case actions.ADD_RESULT_FILTERED:
      return { ...state, resultFiltered: [...action.resultFiltered] }
    case actions.EMPTY_RESULT_FILTER:
      return { ...state, resultFiltered: [] }
    default:
      return state;
  }
};
