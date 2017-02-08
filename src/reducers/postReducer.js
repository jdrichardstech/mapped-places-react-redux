import constants from '../constants'

var initialState={
  currentLocation:{
     lat:48.858093,
    lng:2.294694
  },
  list:null
}

export default(state=initialState, action)=>{
  let updated=Object.assign({},state)
  switch(action.type){
    case constants.CURRENT_LOCATION_CHANGED:
//			console.log('CURRENT_LOCATION_CHANGED: '+JSON.stringify(action.location))
			updated['currentLocation'] = action.location
			updated['list'] = null
			return updated
    case constants.POST_CREATED:
	    let updatedList = (updated['list']==null) ? [] : Object.assign([], updated['list'])
	    updatedList.unshift(action.post)
	    updated['list']=updatedList
	    return updated
    case constants.POSTS_RECEIVED:
	    updated['list']=action.posts
	    // console.log('POSTS_RECEIVED: ' + JSON.stringify(action.posts))
	    return updated
	    case constants:CURRENT_LOCATION_CHANGED:
	    updated['currentLocation'] = action.location
	    updated['list'] = null
	    console.log("CURRENT_LOCATION_CHANGED: " + JSON.strinfigy(action.location))
	    return updated
    default:
    	return updated
  }
}
