const mongoose = require('mongoose');

const {Schema,model} = mongoose;

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email : {
        type: String,
        require : true,
    },
    rollno : {
        type : String,
        require:true,
        unique:true
    },
    password:{type:String,require:true}
})


const userModel = model('user',UserSchema)


module.exports = userModel