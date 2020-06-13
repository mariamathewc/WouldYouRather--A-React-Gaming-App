import React, { Fragment, Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

/*
* This class displays the login page of Would-You-Rather App
*/

class Login extends Component{

	state = {
		loginName:'',	
	}

/*
* This function updates the state of loginName whenever a user choose a user from the drop down list
*/
	updateLoginName =(value) =>{
		this.setState(() =>({
			loginName:value
		}))
	}

/*
* This function dispatch the action creator setAuthedUser which sets the login user as the authenticated user.
* If no user is selected, an alert is displayed to select a user
*/

	handleAllowLogin =(e) =>{
		e.preventDefault()
		const { loginName } = this.state
		const { dispatch, users } = this.props

		let username = [];

		username =	Object.keys(users).filter((u) =>(

		u === this.state.loginName
		))

		if (username.length == 1){
			dispatch(setAuthedUser(loginName))
		}
		else{
			window.alert("Please select a user");
		}
	}




render(){

	const { users } = this.props;
	const { loginName } = this.state
	
	return(


            <Fragment>
                <div className="center-texts" >

                    <div className="login-heading" >
                        <h2 > Welcome to Would You Rather App </h2>
                        <h3 > Please sign in to continue </h3>
                    </div>

                    <div className="login-padding">
                        <form onSubmit={this.handleAllowLogin}>
                            
                            <div className="login-container"  >
                                <img src='https://studio.code.org/v3/assets/mpZsRoICnfJ_MdKiUN7AkQ/wouldyourather.jpg'                          
                                     alt={users[loginName]}
                                     className ='login-image'
                                /> 

                            	<div className="login-select-btn" >   	
                            	    <select onChange={(e) => this.updateLoginName(e.target.value)}>
                            	        	<option value="">Select User</option>
                            	        		{
                            	            	Object.keys(users).map(user => 
                            	                	<option  key={user} value={user}>  {user}  </option>)
                            	        		}
                            	    </select>   
                            	</div>                     
                            </div>

                            <button className="login-submit-btn"><b>SIGN IN</b></button>
                        </form>
                    </div>
                </div>
            </Fragment>
		);

}


}


/*
* Passing users and authedUser from redux store to class component
*/
function mapStateToProps({users, authedUser}){
	return {
	 users,
	 authedUser
	
	}
}

export default connect(mapStateToProps)(Login)