const jwt=require('jsonwebtoken')
const User=require('./User/User.model.js')
const TOKEN_KEY=process.env.JWT_ACCESS_TOKEN;


const isAdmin= async (req,res,next)=>{
    const {email}=req.body;

    let token=req.headers['x-auth-token']|| req.body.token|| req.query.token;
    if(token){
        try{
            const decoded= jwt.verify(token,TOKEN_KEY)

            //save user data in decoded
            req.user=decoded;
            const user=await User.findOne({id:decoded?._id,userType:"ADMIN"})
            .select("-password")
        if(!user){
            return res.send("INSUFFITENT PERMISSION")
        }
        return next();

        }catch(err){
            return res.status(401).json({
                msg:"INVALID USER AUTH TOKEN!",
                err:err.message
            })
    
        }
    }else{
        return res.status(400).json({
            msg:"NO USER AUTH TOKEN FOUND",err:"NO AUTH TOKEN FOUND"
        })
    }
    }


    const checkAuth=async (req,res,next)=>{

        try{
            const token=req.headers["x-auth-token"]|| req.body.token||req.query.token;
                if(token){
                    try{
                        const decode=jwt.verify(token,TOKEN_KEY)
                        req.user=decode;

                        const user=await User.findOne({id:decode?._id}).select("-password");

                        if(!user)
                        return res.send("Auth Failed!")

                        return next();
                    }catch(err){
                        return res.status(401).json({
                            msg:"Invalid User Auth",err:err.msg,
                        })

                    }
                }else{
                    return res.status(400).json({msg:"NO AUTH TOKEN FOUND",err:"NO AUTH TOKEN FOUND"})

                }
        }catch(err){
            return res.send(err);

        }
    }


    module.exports={
        isAdmin,
        checkAuth,
    }