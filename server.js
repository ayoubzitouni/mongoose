const express=require('express')
const { isObjectIdOrHexString } = require('mongoose')
const app=express()
const dbConnect=require('./database.js')
const user=require('./schema')
let dotenv=require('dotenv').config()


dbConnect()



app.get('/',(req,res)=>{
    res.status(200).send('hi')
})
// const addUser=async()=>{
//     const person=new user({name:"ayoub",age:25,favoriteFoods:["Ma9rouna","mlewi"]})
//     await person.save()
//     console.log('person added')
//     user.create([{name:"Oussama",age:25,favoriteFoods:["lasagna","Pizza"]},{name:"Hamza",age:25,favoriteFoods:["Mlewi","Chappati"]}])
// }
// const find=async()=>{
//     const a=await user.find({age:25})
//     console.log(a)
// }
// const findOne=async()=>{
//     const a=await user.findOne({age:25})
//     console.log(a)
// }
// const findById=async()=>{
//     const a=await user.findById("637e7bfb2d3b7a6f46c7b63c")
//     console.log(a)
// }
// const update=async()=>{
//     const a=await user.findByIdAndUpdate("637e7bfb2d3b7a6f46c7b63c",{$set:{favoriteFoods:["Kosksi","rouz"]}})
//     console.log(a)
// }
// const update=async()=>{
//     const a=await user.findOneAndUpdate({name:"Oussama"},{$set:{age:20}})
//     console.log(a)
// }
const remove=async()=>{
    const a=await user.findByIdAndRemove("637e7bfb2d3b7a6f46c7b63c")
    console.log(a)
}
remove()
// update()
// findById()
// findOne()
// find()
// addUser()
app.listen(3000)