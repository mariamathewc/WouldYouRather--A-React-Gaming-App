import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionText from './QuestionText'
import { Redirect } from 'react-router-dom'

/*
* This class displays the dashboard
*/
class Dashboard extends Component{

	state = {
		currentTab: 'unanswered'
	}

/*
* This function toggles the "Answered Questions" tab and "Unanswered Questions" tab
* Initially we have set the state of currentTab as "unanswered"
*/
	toggleAnswered = (e, selectedTab) => {

		e.preventDefault()
		this.setState(() => ({
			currentTab: selectedTab
		}))
	}

	render(){

		return(
			<div className ='dashboard-container'>
				{
					this.state.currentTab === 'unanswered'
					? <h2 className='center-texts'><em>UnAnswered Questions</em></h2>
					: <h2 className='center-texts'><em>Answered Questions</em></h2>
				}

				<div className='dashboard-button'>
					<button
						 className='btn' 
						 onClick={(e) => this.toggleAnswered(e, 'unanswered')}>
						 Unanswered
					</button>

					<button 
						className='btn' 
						onClick={(e) => this.toggleAnswered(e, 'answered')}>
						Answered
					</button>
				</div>

				<ul>
					{
						this.state.currentTab==='answered'
						? this.props.answeredByAuthedUser.map((id) => (
							<li key={id}>
						  		<QuestionText id={id}/>  
							</li>
						))
					: 	this.props.unansweredByAuthedUser.map((id) => (
						<li key={id}>
						  <QuestionText id={id}/>
					    </li>
						))
					}
				</ul>
			</div>

		)
	}
}



function mapStateToProps({questions, authedUser}){

return{

      	answeredByAuthedUser: Object.keys(questions)
							.filter((q) => (questions[q].optionOne.votes.indexOf(authedUser) > -1) || (questions[q].optionTwo.votes.indexOf(authedUser) > -1))
							.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		unansweredByAuthedUser: Object.keys(questions)
								.filter((q) => (questions[q].optionOne.votes.indexOf(authedUser) === -1) && (questions[q].optionTwo.votes.indexOf(authedUser) === -1))
								.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		authedUser
   }
}


export default connect(mapStateToProps)(Dashboard) 