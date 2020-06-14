import React, {Fragment, Component } from 'react'
import { connect } from 'react-redux'
import PollResult from './PollResult'
import Unpolled from './Unpolled'
import Logo from "../images/error-404.png"


/*
* This class displays Poll tab or poll results based on the values of optionOneStatus and optionTwoStatus
* If none of them are selected, poll tab is displayed which allows users to poll
* else poll result tab is displayed to the user
*/
class Poll extends Component {

	render() {

		const { id,	authorImg, question, optionOneStatus, optionOneVote, optionTwoStatus, optionTwoVote, authedUser } = this.props

			if ( !question )
			{
			return (
				<div >
					<img src={Logo} alt="error" className='error-404' />
				</div>
			)
			}

		return (

			<Fragment >
				<div >
					<h2 className='center-poll'>Would You Rather...?</h2>
				</div>	

				<div>	
					  {
					  	(optionOneStatus !== true && optionTwoStatus !== true) &&
					     	< Unpolled id ={id} question={question} authorImg={authorImg} />
					  }
					  {
					   	(optionOneStatus === true || optionTwoStatus === true) &&
					  		< PollResult id ={id} question={question} optionOneStatus={optionOneStatus} optionTwoStatus={optionTwoStatus}
					  			 optionOneVote ={optionOneVote} optionTwoVote={optionTwoVote} authorImg={authorImg} />
					  }
				</div>
			</Fragment>
			    
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, props) {

	const { id } = props.match.params

	return {
		id,
		authorImg: questions[id] ? users[questions[id].author].avatarURL : null,
		question: questions[id] ? questions[id] : null,
		optionOneStatus: questions[id] ? questions[id].optionOne.votes.indexOf(authedUser) > -1 : null,
		optionOneVote: questions[id] ? (questions[id].optionOne.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100 : null,
		optionTwoStatus: questions[id] ? questions[id].optionTwo.votes.indexOf(authedUser) > -1 : null,
		optionTwoVote: questions[id] ? (questions[id].optionTwo.votes.length / (questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length)) * 100 : null,
		authedUser
	}

}

export default connect(mapStateToProps)(Poll)
