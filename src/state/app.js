import * as actions from './actions'

// Initial state
const initialState = {
  query: '',
  resultFiltered: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_SEARCH:
      return { ...state, query: action.search }
    case actions.ADD_RESULT_FILTERED:
      return { ...state, resultFiltered: [...action.resultFiltered] }
    case actions.EMPTY_RESULT_FILTER:
      return { ...state, resultFiltered: [] }
    default:
      return state;
  }
};
