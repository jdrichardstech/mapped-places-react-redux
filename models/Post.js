var mongoose = require('mongoose')


var PostSchema = new mongoose.Schema({
  profile:{type:mongoose.Schema.Types.Mixed, default:{}},
  image:{type:String, default: ''},
  caption:{type:String, default:''},
  timestamp:{type:Date, default:Date.now},
  geo:{
    type: [Number],
    index: '2d'

  }
})

PostSchema.methods.summary=function(){
var summary = {
  profile: this.profile,
  image: this.image,
  caption:this.caption,
  id: this._id.toString(),
  geo: this.geo
}
return summary
}


module.exports = mongoose.model('PostSchema', PostSchema)
