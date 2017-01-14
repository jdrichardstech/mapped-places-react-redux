import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <div id="footer-wrapper">


          <div id="footer" className="container">
            <ul className="icons">
              <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
              <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
            </ul>
            <span className="copyright">&copy; Untitled. All Rights Reserved.</span>
          </div>

      </div>

    )
  }
}

export default Footer
