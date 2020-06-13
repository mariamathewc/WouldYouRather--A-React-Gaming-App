import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Poll from './Poll'
import NavBar from './NavBar'
import LeaderBoard from './LeaderBoard'
import CreateQuestion from './CreateQuestion'


class App extends Component {

/*
* Setting the state of redux store with initial data
*/  

  componentDidMount() {

    this.props.dispatch(handleInitialData());
  }

  render() {
     
    return (

      <Router>
        <Fragment>
          <LoadingBar class="Loading" style={{ backgroundColor: 'rgba(139,0,0,0.8)', height: '5px' }}/>

          <div>

              { this.props.authedUser===null?
                <Login/> :

                <Fragment >      
                  <NavBar/>
      
                  <Route path='/login' exact component={Login} />
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id'  component={Poll} />                 
                  <Route path='/add' exact component={CreateQuestion} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                </Fragment>
              }
          </div>
        </Fragment>
      </Router>    
    );
  }
}

/*
* Passing authedUser from redux store to class component
*/
function mapStateToProps({authedUser}){
  
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)