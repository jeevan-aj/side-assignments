const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const mongoString  = "mongodb+srv://ambrahamjeevan:hbUDRkHojeTyPVwT@todocluster.pnubngq.mongodb.net/?retryWrites=true&w=majority"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const postSchema = new mongoose.Schema({
    name:{type:String,unique:true,required:true},
    completed:Boolean
})

const todoModel = mongoose.model('Model',postSchema)

//connecting to mongodb
function conect(url){
    return mongoose.connect(url)
}


async function start(){
    
    try{
        await conect(mongoString)
        app.listen(port,()=> {
            console.log(`listening to port http://localhost:${port}`)
        })
    }
    catch(error){
        console.log("some error occured",error)
    }
}

start()


app.get('/',async (req,res)=> {
    const todo = await todoModel.find({})
    res.json(todo)
})

app.get('/todos/:id',async(req,res)=> {
    const todo = await todoModel.findById(req.params.id)
    res.json(todo)
})

app.post('/todos',async (req,res)=> {

    try{
        const todo = await todoModel.create(req.body)
        res.json(todo)
    }
    catch(error){
        if(error.code === 11000){
            res.status(409).json({error:'item already exists'})
        }
        else{
            res.status(500).json({error:'Internal server error'})
        }
    }
})

app.put('/todos/:id',async(req,res)=> {
    const todo = await todoModel.findByIdAndUpdate(req.params.id,req.body)
    res.json(todo)
})

app.delete('/todos/:id',async (req,res)=> {
    const todo = await todoModel.findByIdAndDelete(req.params.id)
    res.json(todo)
})


