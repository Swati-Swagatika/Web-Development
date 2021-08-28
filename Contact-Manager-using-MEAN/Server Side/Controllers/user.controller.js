const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const secretKey = "MEANStackCourseProject"

exports.register = async (req,res)=>{
    const userSchema = joi.object({
        fullname:joi.string().required().min(3),
        email:joi.string().email().required(),
        password:joi.string().min(6).max(10)
    })
    try{
        let userFields = await userSchema.validateAsync(req.body);
        console.log('hi')
        let user = await User.findOne({email:userFields.email});
        console.log('hi')
        if(!user){
            console.log('hi')
            user = new User(req.body)
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password,salt);
            await user.save();
            console.log('hi')
            res.status(200).json({
                message:"User registered successfully",
                user
            })
        }else{
           res.status(400).json({
                message:"User already exists"
            })
        }
    }catch(err){
        res.status(400).json({
            message:"Something went wrong",
            error:err
        })
    }
}

exports.login = async (req,res) =>{
    const loginSchema = joi.object({
        email:joi.string().required(),
        password:joi.string().required()
    })
    try{
        console.log('hi')
        const loginFields = await loginSchema.validateAsync(req.body);
        console.log('hi')
        let user = await User.findOne({email:loginFields.email})
        console.log('hi')
        if(!user){
            res.status(401).json({
                message:"Username/Password does't exist"
            })
        }else{
            const is_match = await bcrypt.compare(loginFields.password,user.password)
            if(!is_match){
                res.status(401).json({
                    message:"Username/Password does't exist"
                })
            }
            else{
                const payload={
                    userdata:{
                        id:user._id
                    }
                }
                const token = await jwt.sign(payload,secretKey,{expiresIn:7200})
                res.status(200).json({
                    message:"Logged In",
                    user:{id:user._id,name:user.fullname},
                    token
                })
            }
        }
    }catch(err){
        res.status(500).json({
            message:"something went wrong",
            error:err
        })
    }
    
}