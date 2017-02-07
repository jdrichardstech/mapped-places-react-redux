import React, { Component } from 'react'
import { Posts, MapNavigation, Account } from '../containers'
import {Header , Footer, Sidebar} from '../view'



class Home extends Component{
  render(){
    return(

        <div id="page-wrapper">

          <Header />

            <div id="banner-wrapper">
              <div className="container">
                <div className="row">
                  <div className="12u">
                      <div id="banner">
                          <p>This app allows you to see pictures relative to your position on the map. When you move the map, only the pics created in that area will appear below.
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>


            <div id="main-wrapper">
              <div className="container">
                <div className="row">
                  <div className="9u 12u(mobile)" id="content">
                      <article className=" section featured-post" id=" ">
                        <div className="full-image">
                          <MapNavigation />
                          <hr style={{border:"1px solid #303030"}}  />
                            <Posts />
                        </div>
                      </article>

                    </div>
                    <div className="3u 12u(mobile)" id="sidebar">
                      <section className="box default special1">

                        <div className="content">
                        <Account />
                        </div>

                      </section>
                    </div>

                    <div className="3u 12u(mobile)" id="sidebar">
                      <section className="box default special2">

  											<div className="content" >
  												<h2>Instructions</h2>
                          <ol style={{fontFamily:'Open Sans, sans-serif', fontSize:'1.2em',listStyleType:'circle', paddingLeft:15}}>
                            <li style={{paddingBottom:10, lineHeight:'1.3em'}}>Move the map around to your desired area</li>
                            <li style={{paddingBottom:10, lineHeight:'1.3em'}}>Click the upload image button and add a photo of your choosing</li>
                            <li style={{paddingBottom:10, lineHeight:'1.3em'}}>Add a caption about your image and or map location.</li>
                            <li style={{paddingBottom:10,lineHeight:'1.3em'}}>When you click submit the entry should appear below</li>
                          </ol>


  											</div>

  										</section>
                    </div>

                </div>
              </div>
            </div>
          <Footer />
      </div>
    )
  }
}


export default Home
