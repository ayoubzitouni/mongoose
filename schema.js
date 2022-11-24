let mongoose=require("mongoose")
let {Schema}=mongoose;






const userSchema=new Schema({
    name:String,
    age:Number,
    favoriteFoods:Array,
})
module.exports=mongoose.model("user",userSchema)