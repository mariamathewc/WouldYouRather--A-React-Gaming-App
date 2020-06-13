import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'

/*
* This class displays the poll tab
*/
class Unpolled extends Component {

/*
* This function update the state of polled user and question with authedUser and selected option
*/
	handleVote = (e, questionId, selectedOption) => {

		e.preventDefault()
		const { dispatch } = this.props
		dispatch(handleSaveQuestionAnswer(questionId, selectedOption))
	}


    render () {

    	const {id, question, authorImg } = this.props

    	return(

    			<div className='center-unpolled'>

    				<div class ="split left">

						<div class="poll-centered-left">
							<img src={authorImg} alt='Author Avatar'className='poll-user-avatar'/>
							<h3>{question.author}</h3>
						</div>
					</div>

					<div class="split right">

						<div class="poll-centered-right">

							<div className='options-unpolled'>

								<div className='option1'>
									<p><b><em>{question.optionOne.text}</em></b></p>
									<button className='btn' onClick={(e) => this.handleVote(e, id, 'optionOne')}>Vote</button>
								</div>

								<div className='option2'>
									<p><b><em>{question.optionTwo.text}</em></b></p>
									<button className='btn' onClick={(e) => this.handleVote(e, id, 'optionTwo')}>Vote</button>
								</div>

							</div>
						</div>
					</div>
				</div>

    		)
    }

}




export default connect()(Unpolled)