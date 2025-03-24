const express= require('express')
const router = express.Router()
const {createnew,getblogs,deleteblog,updateblog,getblog}= require('../controllers/blogcontrollers')

//Get all blogs
router.get('/',getblogs)

//Get single blog
router.get('/:id',getblog)

//Post a new blog
router.post('/',createnew)

//Delete a new blog
router.delete('/:id',deleteblog)

//Update a new blog
router.patch('/:id/',updateblog)

module.exports=router