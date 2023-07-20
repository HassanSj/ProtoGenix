const mongoose = require('mongoose')


const User = new mongoose.Schema(
	{  
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
		
	},
	{ collection: 'users' }
)

const Users = mongoose.model('UsersData', User)


module.exports = Users