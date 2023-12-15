const express=require ('express');
const mongoose=require('mongoose');
require('dotenv').config()

const routes=require('./routes/ToDoRoutes')

const cors=require('cors')   // this is for cross platform connection because server is running on another port and frontend on another

const app=express()
const PORT=process.env.PORT || 5000

//middle ware

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("database connected..."))
.catch((err)=>{console.log(err)})

app.use("/api",routes)  //changin the URL

app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}...`)
})
