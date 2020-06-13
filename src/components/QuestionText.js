import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/*
* This class displays the questions in Dashboard
*/
class QuestionText extends Component {

    render () {

		const { currentQuestion, id, optionOneText, optionTwoText } = this.props

    	return(
			<div className='question-text'>

				<div className='options'>

					<div className='option1'>
						<p className='center-texts'><b><em>{optionOneText}</em></b></p>
					</div>

					<div className='or-text'>
						<p className='center-texts'><b>or</b></p>
					</div>

					<div className='option2'>
						<p ><b><em>{optionTwoText}</em></b></p>
					</div>

				</div>

					<div >
						<Link to={`/questions/${id}`}>Details</Link>
					</div>
			</div>
    	);

    }
    
}	



function mapStateToProps ({authedUser, questions}, { id }) {

    const currentQuestion = questions[id]

    return {
        authedUser,
        currentQuestion,
		optionOneText:currentQuestion.optionOne.text,
		optionTwoText:currentQuestion.optionTwo.text
    }
}


export default connect(mapStateToProps)(QuestionText)