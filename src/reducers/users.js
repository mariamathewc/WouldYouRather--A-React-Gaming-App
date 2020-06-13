import { ADD_USERS, ADD_QUESTION_ANSWER_TO_ANSWERS, ADD_USER_QUESTION } from '../actions/users'

//its returning a new state with users appended to it
export default function users (state = {}, action) {
  switch(action.type) {
  	
    case ADD_USERS :
      return {
        ...state,
        ...action.users
      }
      case ADD_QUESTION_ANSWER_TO_ANSWERS :
			return {
				...state,
		        [action.authedUser]: {
		        	...state[action.authedUser],
		          	answers: {
		            	...state[action.authedUser].answers,
		            	[action.qid]: action.answer
		          	}
		        }
			}
    	case ADD_USER_QUESTION :
		return {
			...state,
			[action.authedUser]: {
				...state[action.authedUser],
				questions: state[action.authedUser].questions.concat(action.qid)
			}
		}

    default :
      return state
  }
}