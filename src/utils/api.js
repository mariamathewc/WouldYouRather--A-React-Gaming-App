import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialDataAPI () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

// This function updates the state of user by updating the question array. 
//Also it update the state of question by appending new question to it

export function createQuestionAPI(question) {
  return _saveQuestion(question)
}

// This function updates the state of user by updating the answer array. 
//Also it update the state of question by appending current user name to votes array

export function saveQuestionAnswerAPI(answer) {
  return _saveQuestionAnswer(answer)
}