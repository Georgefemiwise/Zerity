const mongoose=require('mongoose')
const MONGO_URL=process.env.DATABASE_CON;
require('dotenv').config();


mongoose.connect(MONGO_URL,{
    useNewUrlPaser:true,
    useNewCreateIndex:true
}).then(()=>{
    console.log("DATABASE CONNECTED")
})