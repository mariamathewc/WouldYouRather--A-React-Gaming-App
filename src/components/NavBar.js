import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaCalendar } from 'react-icons/fa'
import { logout } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

/*
* This class displays the NavigationBar
*/
class NavBar extends Component {
  
  /*
  * This function reset the nav link to '/' once the user logout from the app
  */
  logoutUser = () => {
    const { dispatch, history, authedUser } = this.props;
    dispatch(logout());
    history.push('/')
  }

	render () {
        
    return (
      <nav className='nav'>

        <ul>

          <li>
            <NavLink to='/' exact activeClassName='active' className='nav-color'><b> Dashboard </b></NavLink>
          </li>

          <li>
            <NavLink to='/add' exact activeClassName='active' className='nav-color'> <b>New Question </b> </NavLink>
          </li>

          <li>
            <NavLink to='/leaderboard' exact activeClassName='active' className='nav-color'> <b>LeaderBoard </b> </NavLink>
          </li>

          <li className='currentUser'> 

            <div><b> Hello, {this.props.authedUser } </b> </div>

          	<img src={this.props.avatarURL} alt="userImage" className='currentUser-avatar'/>

            	<span  onClick={this.logoutUser}><i className="fa fa-sign-out fa-2x" ></i> </span>
          </li>

        </ul>
        
      </nav>
    )
  }
}

function mapStateToProps({ users, authedUser }) {

  return {
    avatarURL: users[authedUser].avatarURL,
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NavBar))