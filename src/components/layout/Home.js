import React, { Component } from 'react'
import { Posts, MapNavigation, Account } from '../containers'
import {Header , Footer, Sidebar} from '../view'



class Home extends Component{
  render(){
    return(

        <div id="page-wrapper">

          <Header />
          {/*banner*/}
            <div id="banner-wrapper">
              <div className="container">
                <div className="row">
                  <div className="12u">


                      <div id="banner">
                        <p><span>Lorem ipsum dolor sit amet</span> magna consectetur nulla adipiscing sed donec id dolor urna. Donec bibendum eros ut eros tincidunt veroeros et amet pharetra tortor vulputate.</p>
                      </div>

                  </div>
                </div>
              </div>
            </div>
            {/*END BANNER*/}

            {/*BEGIN MAIN WRAPPER */}

            <div id="main-wrapper">
              <div className="container">
                <div className="row">
                  <div className="9u 12u(mobile)" id="content">
                      <article className="box section featured-post" id=" ">
                        <div className="full-image">
                          <MapNavigation />
                        </div>
                        <div className="content">
                          <div className="row">
                            <div className="12u 12u(mobile)">

                              <Posts />

                            </div>

                          </div>
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

                </div>
              </div>
            </div>

            {/*}  <MapNavigation />

                        <Posts />

                      <Account />
*/}

          <Footer />
      </div>


    )
  }
}


export default Home
