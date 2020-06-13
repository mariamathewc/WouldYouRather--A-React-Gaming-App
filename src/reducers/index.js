import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

//createStore function only accepts a single reducer. so
// we combine all of these reducers into one main, root reducer
export default combineReducers({
  
  users,
  questions,
  authedUser,
  loadingBar: loadingBarReducer,
})