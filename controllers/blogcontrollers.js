const mongoose= require ('mongoose')
const Blog = require('../models/blogmodel')

//get all blogs
const getblogs =async (req,res)=>{  
    try{
const blogs = await Blog.find({}).sort({createdAt:-1})
res.status(200).json(blogs)
    }catch(error){
        return res.status(404).json(error)
    }
}

//get 1 blog
const getblog =async (req,res)=>{
    let {id}=req.params
    id=id.trim()
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({error: 'There is no such blog'})
    }
    const blog = await Blog.findById(id)
    if(!blog){
        return res.status(404).json({error:'No such blog'})
    }
    if(blog){
        res.status(200).json(blog)
    }
}

//Update 1 blog
const updateblog = async (req,res)=>{
    let{id}=req.params
    id=id.trim()
    if(!mongoose.Types.ObjectId.isValid(id)){
      return  res.status(404).json({error:'There is no such blog'})
    }
const blog = await Blog.findOneAndUpdate({_id:id},{...req.body})
    if(!blog){
       return res.status(404).json({error:'There is no such blog'})
    }
    if(blog){
        res.status(200).json(blog)
    }
}


//Delete 1 blog
const deleteblog = async (req,res)=>{
    let{id}=req.params
    id=id.trim()
    if(!mongoose.Types.ObjectId.isValid(id)){
        return   res.status(404).json({error:'There is no such blog'})
    }
const blog = await Blog.findOneAndDelete({_id:id},{...req.body})
if (!blog){
    return res.status(404).json({error:'There is no such blog'})
}
if(blog){
    res.status(200).json(blog)
}
}

//Create new blog
const createnew = async (req,res)=>{
    const {title,content,author}=req.body
    try{
        const blog = await Blog.create({title,content,author})
        res.status(200).json(blog)
    }
    catch(error){
        return  res.status(404).json(error)
    }
}

module.exports ={createnew,getblogs,deleteblog,updateblog,getblog}