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
        <center>
      <label>Caption:</label>
      <input style={{width:250}} onChange={this.updatePost.bind(this)} type="text" id="caption"  /></center><br /><br />
          <DropZone  onDrop={this.grabImage.bind(this)} >
                 <div style={{width:150, height:150, border:'1px groove #E6E7F5',borderRadius:5, margin:'25px auto',padding:30}}><center><a href="#" style={{fontSize:'1em', paddingTop:0}}>Click here <br /> or drag image into this box</a></center></div>
           </DropZone><br />
      <button className="btn btn-primary" onClick={this.submitPost.bind(this)}>Submit</button>

      </form>

      <hr />
    </div>
  )
}
  }



export default CreatePost
