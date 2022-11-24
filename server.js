const express=require('express')
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
const find=async()=>{
    const a=await user.find({favoriteFoods:"Pizza"})
    console.log(a)
}
find()
// addUser()
app.listen(3000)