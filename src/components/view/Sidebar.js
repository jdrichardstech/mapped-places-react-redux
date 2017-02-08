import React, { Component } from 'react'

class Sidebar extends Component{
  render(){
    return(
      <div>
          { (this.props.currentUser==null) ?  <Register onLogin={this.login.bind(this)} onRegister={this.register.bind(this)} /> : <h3>Welcome <span>{currentUser.username.toUpperCase()}</span></h3>}
      </div>
    )
  }
}

export default Sidebar
