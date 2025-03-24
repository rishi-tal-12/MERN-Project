const mongoose =require('mongoose')
const Schema = mongoose.Schema

const blog= new Schema({
 title :{type :String ,required :true},
 content :{type : String ,required : true},
 author :{type: String, required: true}
})

const Blog=mongoose.model('Blog',blog)
module.exports =Blog

