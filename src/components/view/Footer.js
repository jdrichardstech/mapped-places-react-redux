import React, { Component } from 'react'

class Footer extends Component{
  render(){
    return(
      <div id="footer-wrapper">
          <div id="footer" className="container">
            <ul className="icons">
              <li><a href="#" className="icon fa-twitter" style={{background:'#FF4E00' }} ><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon fa-facebook" style={{background:'#FF4E00'}}><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram" style={{background:'#FF4E00'}}><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon fa-tumblr" style={{background:'#FF4E00'}}><span className="label">Tumblr</span></a></li>
              <li><a href="#" className="icon fa-dribbble" style={{background:'#FF4E00'}}><span className="label">Dribbble</span></a></li>
            </ul>
            <span className="copyright">&copy;2017 JDRichardsTech. All Rights Reserved.</span>
          </div>
      </div>
    )
  }
}

export default Footer
