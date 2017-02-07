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

         <h2>Sign up OR Login</h2>
           <form className="form-group">
             <label style={{marginBottom:10}}>Username:</label>
            <input style={{marginBottom:20, border:'none',color:'black'}} className=""  onChange={this.updateRegistration.bind(this)} type="text"  id="username" />
            <label style={{marginBottom:10}}>Password:</label>
          <input style={{marginBottom:20,border:'none',color:'black'}} className=""   onChange={this.updateRegistration.bind(this)} type="password"  id="password" />
            <button className="button" onClick={this.submitRegistration.bind(this)}>Submit</button> <span style={{paddingRight:5 }}> OR </span>
            <button  className="button" onClick={this.submitLoginCredentials.bind(this)}>Login</button>
        </form>


        </div>

    )
  }
}

export default Register
