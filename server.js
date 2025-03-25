require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const blogs = require('./routes/blogs')
const cors = require("cors")
const app =express()

app.use(express.json())

app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})



app.use(cors({
    origin: "*",  
    methods: "GET,POST,PATCH,DELETE",
    credentials: true
}));



app.use('/api/blogs',blogs)
mongoose.connect(process.env.MONGO)
.then(()=>{
app.listen(process.env.PORT,()=>{
    console.log('Listening on PORT 5000')
})
}
)
.catch((error)=>{
console.log(error)
}
)