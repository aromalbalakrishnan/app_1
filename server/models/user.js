const mongoose = require("mongoose");

const User = mongoose.Schema(
    {        
        name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },

    },{timestamps: true}, { collection: 'user-data' }
)

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const model = mongoose.model('UserData', User)

module.exports = model
