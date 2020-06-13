import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
* This class displays the poll results
*/
class PollResult extends Component {

    render () {

    	const {question, authorImg, optionOneVote, optionTwoVote, optionOneStatus, optionTwoStatus } = this.props
    	
    	return (
    			<div>
    				<div class ="split left">
						<div class="poll-centered-left">
							<img src={authorImg} alt='Author Avatar'className='poll-user-avatar'/>
							<h3 >{question.author}</h3>
						</div>
					</div>

					<div class="split right">

						<div class="poll-centered-right">

							<div className='options-unpolled'>

								<div className='option1'>
									<p className='center-texts'><b>{question.optionOne.text}</b></p>
									<div >Vote Count: {question.optionOne.votes.length}</div>
									<div >Vote Percentage: {Math.ceil(optionOneVote*100)/100}%</div>
									{
										optionOneStatus &&
											<div className='center-poll'>Your Selection</div>
									}
								</div>

								<div className='option2'>
									<p className='center-texts'><b>{question.optionTwo.text}</b></p>
									<div >Vote Count: {question.optionTwo.votes.length}</div>
									<div >Vote Percentage: {Math.ceil(optionTwoVote*100)/100}%</div>
									{
										optionTwoStatus &&
											<div className='center-poll'>Your Selection</div>
									}
								</div>
							</div>
						</div>
					</div>
				</div>






    		 )
    }

}




export default connect()(PollResult)