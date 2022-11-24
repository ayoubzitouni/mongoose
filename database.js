let mongoose=require('mongoose')





//connection to the database
const connectDB=()=>{
mongoose.connect(`${process.env.MONGO_URL}`)
.then(()=>{
    console.log("database connected successfully")
})
.catch(err=>{
    console.log("database connection error"+err)
})
}
module.exports=connectDB
