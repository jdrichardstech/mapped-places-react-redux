import React, { Component } from 'react'
import { Map } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class MapNavigation extends Component{

  componentDidMount(){

  }

  setNewLocation(location){
        this.props.updateCurrentLocation(location)
        console.log('setanotherlocation: '+ JSON.stringify(location))
  }

  render(){
    return(
      <div style={{borderTop:'4px inset #22B6ED', borderBottom:'4px inset #22B6ED'}}>
        <Map center={this.props.posts.currentLocation}
        zoom={14}
        mapMoved={this.setNewLocation.bind(this)} />
      </div>
    )
	}
}

const stateToProps = (state) => {
    return{
        posts: state.post
    }
}

const dispatchToProps = (dispatch)=>{
    return{
        updateCurrentLocation: (location)=> {dispatch(actions.updateCurrentLocation(location))}
    }
}


export default connect(stateToProps, dispatchToProps)(MapNavigation)
