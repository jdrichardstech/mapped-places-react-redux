import React,{ Component } from 'react'
import DropZone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreatePost extends Component {

  constructor(){
    super()
    this.state={
      post:{
        image:'',
        caption:''
      }
    }
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

    if (this.state.post.image.length == 0){
			alert('Please add an image first.')
			return
		}

		if (this.state.post.caption.length == 0){
			alert('Please add a caption.')
			return
		}

     let updated=Object.assign({}, this.state.post)
     this.props.onCreate(updated)

  }


  imageSelected(files){
  		console.log('imageSelected: ')
  		const image = files[0]

  		const cloudName= 'jdrichardstech'
  		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

  		const timestamp = Date.now()/1000
  		const uploadPreset='qfk6kfpf'

  		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'e8LAFbk1H23PLU02S5Og2DzsMYQ'

  		const signature = sha1(paramsStr)
  		const params = {
  			'api_key': '854536555581142',
  			'timestamp': timestamp,
  			'upload_preset': uploadPreset,
  			'signature': signature
  		}

  		APIManager.uploadFile(url, image, params)
  		.then((uploaded) => {
  			console.log('Upload Complete: '+JSON.stringify(uploaded))
  			let updated = Object.assign({}, this.state.post)
  			updated['image'] = uploaded['secure_url']
  			this.setState({
  				post: updated
  			})
  		})
  		.catch((err) => {
  			alert(err)
  		})
  	}

  render(){
    const imageDropped = (this.state.post.image.length==0) ?
        <div style={{padding: '0px 10px 10px 30px'}}>
          <p style={{marginTop:25,marginRight:30,float:'right',width:120,height:120,color:'#ddd', border:'3px solid #FF6C2B',padding:'15px 5px 5px 5px'}}><span style={{textAlign:'center'}}>Uploaded Image<br /> will<br /> appear <br />here</span></p>
        </div>
        :
        <div>
          <img style={{marginTop:25,marginRight:30,float:'right',width:120,height:120,border:'2px solid #fff'}} src={this.state.post.image} />
        </div>
      return(
    <div>
        {imageDropped}
        <DropZone style={{border:'none',marginTop:0}}  onDrop={this.imageSelected.bind(this)} >
            <label style={{paddingRight:10}}>Upload an Image for your location:</label>
            <button className='button'  style={{marginBottom:20,width:'20%',background:'#fff',color:'rgb(34, 182, 237)',border:'none'}}>Upload Image</button>
        </DropZone>
          <p>
             <label style={{marginBottom:15}}>Create a caption for your image and/or map location:</label>
             <input className="" style={{width:'60%',color:'#000'}} onChange={this.updatePost.bind(this)} type="text" id="caption"/>
          </p>

          <button style={{ width:'30%', marginBottom:20, border:'3px solid #FF6C2B'}} className="button"  onClick={this.submitPost.bind(this)}>Submit</button>
    </div>
    )
  }
}



export default CreatePost
