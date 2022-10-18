const mongoose = require('mongoose')
const Post=require('../models/post')
const User=require('../models/user')
module.exports.getAllPosts = async(req,res)=>{
    try {
        const posts = await Post.find().populate('postedBy');
        res.status(200).json(posts)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg:err.message})
    }
}

module.exports.newPost=async(req,res)=>{
    const {id,description}=req.body;
    console.log(id)
    try {
        const user = await User.findById(id);
        console.log(user)
        const newPost = new Post({description})
        newPost.image=req.file.path.substring(6)
        newPost.postedBy=user._id
        user.posts.push(newPost._id)
        await user.save()
        await newPost.save();
        res.status(200).send('success')
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg:err.message})
    }
}


module.exports.getMyPosts =async(req,res)=>{
    const {id}=req.params
   try {
        const user = await User.findById(id).populate('posts');
        res.status(200).json(user)
        } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports.deletePost = async(req,res)=>{
    const {id}=req.params
    try {
        const post = await Post.findByIdAndDelete(id);
        await post.save();
        res.status(200).send('success')
    } catch (err) {
        res.status(404).send(err.message)
    }
}


module.exports.likePost = async(req,res)=>{
    const {id} = req.params
    const {userId}=req.body
    try {
        const post = await Post.findById(id)
        const likeCount = post.likes.findIndex((id) => id === String(userId))
        if(likeCount ===-1){
                 post.likes.push(userId)
        }
        await Post.save();
        res.status(200).json({message:"Liked successfully..."})
        
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}

module.exports.addComment = async(req,res)=>{
    const {id,body,userID}=req.body
    try {
        const post = await Post.findById(id);
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}