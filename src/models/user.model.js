const mongooese = require('mongoose');


const userSchema = new mongooese.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        firstName: { 
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true}

);

const userModel = mongooese.model('User', userSchema);

module.exports = userModel;