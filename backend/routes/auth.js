const express=require('express')
const router=express.Router()

const {signUp,signIn,updateUser,
userById,resetPassword,deleteUser}=require('../controller/authController/auth.js')
const {isAdmin,checkAuth}=require('../middleware/auth.js')


router.post('/signUp',[isAdmin],signUp)


router.post('/signIn',[isAdmin],signIn)

router.post('/update-user',updateUser)

router.get('/user:id',[isAdmin],userById)

router.post('/reset-pass',resetPassword)

router.get('/delete-user',[isAdmin],deleteUser)

module.exports=router;