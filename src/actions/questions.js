
export const ADD_USER_TO_VOTES = 'ADD_USER_TO_VOTES'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'


export function addQuestions(questions) {
	return {
		type: ADD_QUESTIONS,
		questions
	}
}

export function saveSelectedAnswer(authedUser, qid, answer) {
	return {
		type: ADD_USER_TO_VOTES,
		authedUser,
		qid,
		answer
	}
}

export function createQuestion (question) {
    return {
        type: CREATE_QUESTION,
        question,
    }
}



