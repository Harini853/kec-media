const mongoose=require('mongoose')
const Schema =  mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    department:String,
    rollno:String,
    image:String,
    joinedOn:{
        type:Date,
        default:Date.now
    },
    posts:[
        {
             type:Schema.Types.ObjectId,
             ref:'Post'
        }
    ]
})

module.exports=mongoose.model('User',userSchema)