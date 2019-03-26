import * as actions from './actions'
import { searchState } from './searchState.js'

// Reducer
export default (state = searchState, action) => {
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
