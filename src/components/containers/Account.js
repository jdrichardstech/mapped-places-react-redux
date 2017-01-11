import React, { Component } from 'react'
import {Register} from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'



class Account extends Component{
constructor(){
  super()
  this.state={

  }
}

componentDidMount(){
  this.props.checkCurrentUser()
}

register(registration){
  console.log('Register container: '+ JSON.stringify(registration))
   this.props.signup(registration)
}

login(credentials){
  console.log("LOGIN:  " + JSON.stringify(credentials))
  this.props.login(credentials)
}
  render(){
     const currentUser= this.props.account.user

      return(
        <div>
      { (currentUser==null) ?  <Register onLogin={this.login.bind(this)} onRegister={this.register.bind(this)} /> : <h3>Welcome <span>{currentUser.username.toUpperCase()}</span></h3>}

        </div>
      )
  }
}

const stateToProps= (state)=>{
  return{
    account:state.account
  }
}

const dispatchToProps=(dispatch)=>{
  return{
    signup: (params)=>dispatch(actions.signup(params)),
    login: (params)=>dispatch(actions.login(params)),
    checkCurrentUser: ()=> dispatch(actions.checkCurrentUser())
  }
}


export default connect(stateToProps,dispatchToProps)(Account)
