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
  // console.log('componentDidUpdate: ')
}

uploadImage(files){
	const image = files[0]
	console.log("COMMENT Container Image file: "+JSON.stringify(image))
	let timestamp = Date.now()/1000
	const cloudName= 'jdrichardstech'
	const uploadPreset='qfk6kfpf'
	const apiSecret = 'e8LAFbk1H23PLU02S5Og2DzsMYQ'
	const paramStr='timestamp='+timestamp+'&upload_preset='+uploadPreset+'e8LAFbk1H23PLU02S5Og2DzsMYQ'
	const signature=sha1(paramStr)
	const apiKey = '854536555581142'
	const params = {
		'api_key': apiKey,
		'timestamp':timestamp,
		'upload_preset':uploadPreset,
		'signature': signature
	}
	const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

	APIManager.upload(url, image,params,(err, response)=>{
		if(err){
			console.log('Upload err: ' + err.message)
			return
		}
		console.log('Uploaded image: ' + JSON.stringify(response.body))
		const imageUrl = response.body['secure_url']

		let updated = Object.assign({}, this.state.updated)
		updated['image'] = response.body['secure_url']
		this.setState({
			updated: updated
		})
		console.log("UPDATED POST:" + JSON.stringify(this.state.updated))
})
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
  post['image'] = this.state.updated.image

  console.log('submitPost: '+ JSON.stringify(post))
  this.props.createPost(post)
}

  render(){
    const list=this.props.posts.list
    // const list = this.props.posts.list.map((post, i)=>{
    //   return(
    //     <li key={post.id}>{post.caption}</li>
    //   )
    // })

    return(
      <div>
      <center>
      <h2 id="content">Create Posts</h2>
        <CreatePost handleImage={this.uploadImage.bind(this)} onCreate={this.submitPost.bind(this)}/>
        <h2>Posts</h2>
        <ul>
          {(list==null) ? null:
              list.map((post, i)=>{
              return(
                <li  key={post.id}>
                  <span>  <img src={post.image} /><br /> </span>Caption:{post.caption} <br />Coords:{post.geo} <hr />
                </li>
                )
              })
          }

        </ul></center>

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
