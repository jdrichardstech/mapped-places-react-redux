import constants from '../constants/'
import { APIManager } from '../utils'



export default{

  fetchPosts: (params)=>{
  return (dispatch)=>{
    APIManager
    .get('api/post',params)
    .then((response)=>{
      // console.log('Response: ' + JSON.stringify(response))
      dispatch({
        type: constants.POSTS_RECEIVED,
        posts:response.results
      })
    })
    .catch((err)=>{
      console.log("Error" + err)
    })
  }

},
  postsReceived: (posts)=>{
    return{
      type:constants.POSTS_RECEIVED,
      posts: posts
    }
  },

  updateCurrentLocation: (location) => {
    return{
      type:constants.CURRENT_LOCATION_CHANGED,
      location: location
    }
  },

  createPost: (params) => {
    return(dispatch)=>{
      APIManager
      .post('api/post',params)
      .then((response)=>{
        console.log('Response: ' + JSON.stringify(response))
        dispatch({
          type: constants.POST_CREATED,
          post:response.result
        })
    })
    .catch((err)=>{
      console.log("Error" + err)
    })
    }
  },
  signup: (params)=> {
    return(dispatch)=>{
      console.log('hi')
      APIManager
      .post('account/register',params)
      .then((response)=>{
        console.log('Response signup: ' + JSON.stringify(response))
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
    })
    .catch((err)=>{
      console.log("Error" + err)
    })
    }
  },

  login: (params) => {
		return (dispatch) => {
      console.log('LOGIN ACTIONS')
			APIManager.post('/account/login', params)
			.then(response => {
        console.log("RESPONSE.USER: " + JSON.stringify(response.user))
				dispatch({
					type: constants.CURRENT_USER_RECEIVED,
					user: response.user
				})
			})
			.catch((err) => {
				alert("YIKES" +err.message)
			})
		}
	},
  checkCurrentUser:()=>{
    return(dispatch) => {
      APIManager
      .get('account/currentuser',null)
      .then((response)=>{
        console.log('Response signup: ' + JSON.stringify(response))
        dispatch({
          type: constants.CURRENT_USER_RECEIVED,
          user: response.user
        })
    })
    .catch((err)=>{
      console.log("Error" + err)
    })
    }

  }



}
