import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleCreateQuestion } from '../actions/shared'

/*
* This class allows users to post new questions. Once the question is submitted, user is redirected to Dashboard
*/
class CreateQuestion extends Component {

	state = {
		'questionA': '',
		'questionB': '',
		'homePage': false
	}

/*
* This function set the state of questionA with user entered data
*/
	handleAddedQuestionA = (e) => {

		const questionA = e.target.value
		this.setState(()=>({
			questionA
		}))
	}

/*
* This function set the state of questionB with user entered data
*/
	handleAddedQuestionB = (e) => {

		const questionB = e.target.value
		this.setState(()=>({
			questionB
		}))
	}

/*
* This function update the state of users and questions
*/
	handleCreateNewQuestion = (e, optionOne, optionTwo) => {

		e.preventDefault()
		const { dispatch, authedUser } = this.props
		dispatch(handleCreateQuestion(optionOne, optionTwo))
		.then(() => 
			
			this.setState({
				'questionA': '',
				'questionB': '',
				'homePage': true
			})
		)
	}

	render() {

		
		if ( this.state.homePage )
		{
			return <Redirect to='/' />                                                                                                                                                                                                                                          
					}

		return (
			<div className='create-question'>
				<h2 className='center-texts'><em>Would You Rather</em></h2>
				<form className='create-question-form' onSubmit={(e) => this.handleCreateNewQuestion(e, this.state.questionA, this.state.questionB)}>
					<input 
						id='optionOne' type='text' className='input' placeholder='Enter Option One'	value={this.state.questionA}
						onChange={this.handleAddedQuestionA}
					/>
					<input 
						id='optionTwo' type='text' className='input' placeholder='Enter Option Two'	value={this.state.questionB}
						onChange={this.handleAddedQuestionB}
					/>
					{
						(this.state.questionA && this.state.questionB)
						? <button className='btn' type='submit'><b>Ask Question</b></button>
						: <button className='btn' type='button' disabled><b>Ask Question</b></button>
					}
				</form>
			</div>
		)
	}
}

function mapStateToProps({ authedUser }) {

	return {
		authedUser
	}
}

export default connect(mapStateToProps)(CreateQuestion)