import React, { Component } from 'react'
import { Posts, MapNavigation, Account } from '../containers'
import {Sidebar , Footer} from '../view'



class Home extends Component{
  render(){
    return(
      <div>
        <div className="jumbotron" style={{backGroundColor:'BlueSteel'}}><h1>Google Places</h1></div>
        <header id="header" style={{padding:0 }}>
          <div className="">
              <MapNavigation />
          </div>
        </header>
          <div id="main" style={{padding:'4em'}}>
            <section id="one">
              <div className="row">
                		<div className="8u 12u$(xsmall)">
                        <Posts />
                    </div>
                    <div className="4u 12u$(xsmall)">
                      <Account />
                    </div>
              </div>

            </section>
          </div>

      </div>

    )
  }
}


export default Home
