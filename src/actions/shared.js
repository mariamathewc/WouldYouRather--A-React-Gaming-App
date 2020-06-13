
import { getInitialDataAPI, saveQuestionAnswerAPI, createQuestionAPI } from '../utils/api'
import { addUsers, saveSelectedUser, addUserQuestion } from './users'
import { addQuestions, saveSelectedAnswer, createQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialDataAPI()
			.then(({ users, questions }) => {
				dispatch(addUsers(users))
				dispatch(addQuestions(questions))
				dispatch(hideLoading())
			})
	}
}



export function handleSaveQuestionAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState()
		dispatch(showLoading())

	return saveQuestionAnswerAPI({authedUser, qid, answer})
            .then(() => {
                dispatch(saveSelectedAnswer(authedUser, qid, answer))
                dispatch(saveSelectedUser(authedUser, qid, answer))
                dispatch(hideLoading())
            })  
	}
}


export function handleCreateQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const author = authedUser
        dispatch(showLoading())

    return createQuestionAPI({optionOneText, optionTwoText, author})
        .then((question) => {
            dispatch(createQuestion(question))
            dispatch(addUserQuestion(authedUser, question.id))
            dispatch(hideLoading())
        })
    }
}