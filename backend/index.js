const express=require('express')
const app=express();
const port=3000;
const cors=require('cors')
const bodyParser=require('body-parser')
require('dotenv').config()
const router=require('./routes/auth.js')
// const {db}=require('./models/User')
const mongoose=require('mongoose')
const connect=require('./database/db.js')

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))


// mongoose
// .connect(process.env.DATABASE_CON)
// .then(()=>{
//     console.log("Database conected!")
// })

/*database hidden in db folder for security*/
connect();


app.use('/api',router)

app.get('/api',(req,res)=>{
    res.json({
        message:"welcone to zetify"
    })
})

app.listen(port,(err)=>{
    if(err) throw new Error("server not responding");
    console.log(`server started on port ${port}`)
})
