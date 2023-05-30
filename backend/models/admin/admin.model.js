const mongoose=require('mongoose')


const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Username is required!"],
    },
    email:{
        type:String,
        required:[true,"email is required should include @"],
    },
    password:{
        type:String,
        required:[true,"password suld be 8 or more"],
    }
},{
    timestamp:true
})

module.exports=mongoose.model("admin",AdminSchema)