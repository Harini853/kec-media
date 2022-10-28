const express=require('express')
const {signUp,getAllUsers,login,updateDetails,updatePassword,updatePhoto,myDetails} = require('../controllers/user')
const router = express.Router();
const { storage, fileFilter } = require("../multer/profile")
const multer = require('multer');
const upload = multer({ limits: { fileSize: 2097152 }, fileFilter: fileFilter, storage: storage })

router.post('/signup',upload.single('photo'),signUp)
router.post('/login',login)
router.patch('/updateProfile',upload.single('photo'),updatePhoto)
router.patch('/updateDetails',updateDetails)
router.patch('/updatePassword',updatePassword)
router.get('/:id',myDetails)
router.get('/all',getAllUsers)

module.exports=router;