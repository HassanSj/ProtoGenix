const mongoose = require('mongoose')


const Post = new mongoose.Schema(
	{  
		title: {type: String,required: true},
    desc: { type: String,required: true},
    image: {type: String,required: true},
    content: {type: String,required: true},
    username: {type: String,required: true},
		
	},
	{ collection: 'posts' }
)

const Posts = mongoose.model('PostsData', Post)


module.exports = Posts