import { ADD_QUESTIONS, ADD_USER_TO_VOTES, CREATE_QUESTION } from '../actions/questions'

//its returning a new state with users appended to it
export default function questions (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_USER_TO_VOTES :
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: {
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.concat([action.authedUser])
					}
				}
			}

	case CREATE_QUESTION :
		return {
			...state,
			[action.question.id]: action.question
	}

    default :
      return state
  }
}