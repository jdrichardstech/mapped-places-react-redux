var ProfileController = require('./ProfileController')
var PostController = require('./PostController')
var CommentController = require('./CommentController')


module.exports={
  profile: ProfileController,
  comment: CommentController,
  post: PostController
}
