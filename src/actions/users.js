
export const ADD_USERS = 'ADD_USERS'
export const ADD_QUESTION_ANSWER_TO_ANSWERS = 'ADD_QUESTION_ANSWER_TO_ANSWERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'


export function addUsers(users) {
	return {
		type: ADD_USERS,
		users
	}
}


export function saveSelectedUser(authedUser, qid, answer) {
	return {
		type: ADD_QUESTION_ANSWER_TO_ANSWERS,
		authedUser,
		qid,
		answer
	}
}

export function addUserQuestion (authedUser, qid) {
    return {
        type: ADD_USER_QUESTION,
        authedUser,
        qid,
    }
}

