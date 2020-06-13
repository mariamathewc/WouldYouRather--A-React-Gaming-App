import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
* This class displays the result of Would-You-Rather game
*/
class LeaderBoard extends Component {

	render() {

		return (

			<div className='leaderboard-container'>

				<h2 className='center-texts'><em>Leaderboard</em></h2>
				{
					this.props.userRanking.map((user, rank) => (

						<div key={user.id} className='leaderboard-user'>

							<div className='display-rank'>

								<div className='user-avatar-rank'>
									<img src={user.avatarURL} alt='userImage' className='leader-user-avatar' />

									<h3>{rank + 1}. {user.name}</h3>

									<h4> Total Score: {user.questions.length +Object.keys(user.answers).length}	</h4>
								</div>

								<div >
									<p>
										<h5> Created Questions: {user.questions.length} </h5>
									</p>
								</div>

								<div>
									<p>
										<h5> Answered Questions: {Object.keys(user.answers).length} </h5>
									</p>
								</div>
							</div>
						</div>
					))
				}
			</div>
		)
	}
}

function mapStateToProps({ users, authedUser }) {

	return {
		authedUser,
		userRanking: Object.keys(users).sort((p,q) => 
			(users[q].questions.length + Object.keys(users[q].answers).length) - 
			(users[p].questions.length + Object.keys(users[p].answers).length)).map((user) => users[user])
		
	}
}

export default connect(mapStateToProps)(LeaderBoard)