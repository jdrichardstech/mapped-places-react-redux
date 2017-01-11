import React, { Component } from 'react'

class Register extends Component{

  constructor(){
    super()
    this.state={
      registration:{
        username:'',
        password:''
      }
    }
  }

  updateRegistration(event){
    let updated = Object.assign({}, this.state.registration)
    updated[event.target.id] =event.target.value
    this.setState({
      registration:updated
    })

  }

  submitRegistration(event){
    event.preventDefault()
    if(this.state.registration.username.length == 0){
      alert('Please enter username')
    }
    if(this.state.registration.password.length == 0){
      alert('Please enter password')
    }
    // console.log("REGISTER registration: " + JSON.stringify(this.state.registration))
    this.props.onRegister(this.state.registration)
  }

  submitLoginCredentials(event){
    // console.log("IS THERE A USER: " + JSON.stringify(this.state.registration))
    event.preventDefault()
  if (this.state.registration.username.length == 0){
    alert('Please add your username.')
    return
  }

  if (this.state.registration.password.length == 0){
    alert('Please set your password.')
    return
  }
    this.props.onLogin(this.state.registration)
  }

  render(){
    return(

        <div>
        Register
         <h2>Sign up</h2>
         <form>
          <input  onChange={this.updateRegistration.bind(this)} type="text" placeholder="username" id="username" /><br />
          <input  onChange={this.updateRegistration.bind(this)} type="password" placeholder="password" id="password" /><br />
          <button  onClick={this.submitRegistration.bind(this)}>Submit</button><br />
          <button  onClick={this.submitLoginCredentials.bind(this)}>Login</button>
        </form>


        </div>

    )
  }
}

export default Register
