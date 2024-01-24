const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/crud")

//api for get call
app.get("/", (req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

//api to get data using id

app.get("/getUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


//api to update records

app.put("/updateUser/:id", (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name: req.body.name,
        email: req.body.email,
        age : req.body.age
    })
    .then(users=> res.json(users))
    .catch(err => res.json(err))
})


//api for creating new records

app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//api to delete records

app.delete('/deleteUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id : id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("server is running on port 3001")
})

