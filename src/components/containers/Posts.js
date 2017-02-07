import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'
import { CreatePost } from '../view'
import sha1 from 'sha1'


class Posts extends Component{
constructor(){
  super()
  this.state={
    updated:{

    }
  }
}
  componentDidMount(){
    const currentLocation = this.props.posts.currentLocation
    this.props.fetchPosts(currentLocation)

  }

componentDidUpdate(){
  if(this.props.posts.list == null){
    const currentLocation = this.props.posts.currentLocation
    this.props.fetchPosts(currentLocation)
  }
  console.log("POSTS: " +JSON.stringify(this.props.posts))
  console.log("ACCOUNT: " + JSON.stringify(this.props.account))
}



submitPost(post){
  const user = this.props.account.user

  if(user==null){
    alert('Please sign up or Login to submit')
    return
  }

  const currentLocation= this.props.posts.currentLocation

  post['geo'] = [
    currentLocation.lat,
    currentLocation.lng
  ]

  post['profile']={
    id:user.id,
    username: user.username
  }


  // post['image'] = this.state.updated.image

  // console.log('submitPost: '+ JSON.stringify(post))
  this.props.createPost(post)
}

  render(){
    const list=this.props.posts.list //can be null

    return(
      <div>
        <div className="box default special1 12u" style={{padding:20,marginBottom:0}}>
            <h2 style={{fontSize:'2em', color:'#fff', marginBottom:20, paddingBottom:20}}><strong>Create Post:</strong></h2>
            <hr />
          <CreatePost onCreate={this.submitPost.bind(this)}/>
        </div>



                        <div id="banner-wrapper" style={{marginTop:60}}>
                          <div className="container">
                            <div className="row" style={{paddingLeft:0}}>
                              <div className="12u" style={{paddingLeft:0}}>
                                  <div id="banner" style={{marginLeft:0, paddingLeft:0}}>
                                      <p style={{fontSize:'2.5em',color:'#22B6ED'}}>Posts on the Map
                                      </p>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
            <ul>
                {(list==null) ? null:
                    list.map((post, i)=>{
                    return(
                      <li key={i} className="3u 12u(mobile) box" style={{float:'left',marginRight:20,marginBottom:20,border:'2px solid #22B6ED',background:'#22B6ED'}}>

                            <article className=" section">
                              <a href="#" className="image full"><img  src={post.image} alt="" /></a>
                              <div style={{padding:10}} className="content">
                                <p style={{color:'#fff', paddingTop:10, paddingBottom:10, borderBottom:'1px dotted #fff', fontSize:'1.5em',fontFamily:'Open Sans, sans-serif', lineHeight:'1em'}}>{post.caption}</p>

                                <p style={{color:'#fff',fontSize:'1em',fontFamily:'Open Sans, sans-serif'}}>Posted by: <span style={{fontFamily:'Oleo Script, cursive', fontSize:'1.5em',color:'#FF4E00'}}>{post.profile.username}</span></p>
                              </div>
                            </article>

                      </li>
                      )
                    })
                }
            </ul>


      </div>
    )

}
}

const stateToProps = (state)=>{
  return{
    posts: state.post,
    account: state.account

  }
}

const dispatchToProps = (dispatch)=>{
  return{
    fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
    createPost: (params) => dispatch(actions.createPost(params))
  }
}
export default connect(stateToProps, dispatchToProps)(Posts)
