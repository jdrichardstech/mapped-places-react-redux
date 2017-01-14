import React,{ Component } from 'react'
import DropZone from 'react-dropzone'


class CreatePost extends Component {

  constructor(){
    super()
    this.state={
      picDropped:false,
      post:{
        image:'',
        caption:''
      }
    }
  }

  grabImage(files){
		console.log('Grab image: '+ JSON.stringify(files))
		let newImage = Object.assign({},this.state.post)
		newImage['image']=files

		console.log("GRABBED: " + JSON.stringify(this.state.image))
		this.props.handleImage(files)
		this.setState({
			image: newImage,
			picDropped:true
		})
	}

  updatePost(event){
    event.preventDefault()
    let updated=Object.assign({}, this.state.post)
    updated[event.target.id] = event.target.value
    this.setState({
      post:updated
    })
  }

  submitPost(event){
    event.preventDefault()
     let updated=Object.assign({}, this.state.post)
     this.props.onCreate(updated)
     this.setState({
			image:null,
			picDropped:false
		})

    // console.log('submitpost: '+ JSON.stringify(this.state.post))

  }
  render(){
      return(
    <div>


      <br />

      <form >


    <p>
       <label>Caption:</label><input className="form-control" style={{width:'40%' }} onChange={this.updatePost.bind(this)} type="text" id="caption"  />
    </p>
    <center>
      <DropZone style={{border:'none',marginTop:15}}  onDrop={this.grabImage.bind(this)} >
          <button style={{marginBottom:20,width:'30%'}} className='form-control'>Upload Image</button>
         </DropZone>
     <button style={{ width:'30%'}} className="form-control"  onClick={this.submitPost.bind(this)}>Submit</button>


    </center>



      </form>

      <hr />
    </div>
  )
}
  }



export default CreatePost
