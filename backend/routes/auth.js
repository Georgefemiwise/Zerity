const express=require('express')
const router=express.Router()

const {signUp,signIn,updateUser,
userById,resetPassword,deleteUser}=require('../controller/authController/auth.js')


router.post('/signUp',signUp)


router.post('/signIn',signIn)

router.post('/update-user',updateUser)

router.get('/user:id',userById)

router.post('/reset-pass',resetPassword)

router.get('/delete-user',deleteUser)

module.exports=router;