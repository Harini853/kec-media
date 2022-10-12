const mongoose = require('mongoose')
const {Schema}=mongoose

const postSchema = new Schema({
    name:String,
    image:String,
    postedBy:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    postedOn:{
        type:Date,
        default:Date.now
    },
    likes:[
        {
            type:Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    comment:[
        {
            commentedBy:{
                type:Schema.Types.ObjectId,
                ref:"User"
            },
            content:{
                type:String
            }
        }
    ]
})

module.export = mongoose.model('Post',postSchema)