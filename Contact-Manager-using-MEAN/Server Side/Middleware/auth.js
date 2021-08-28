const jwt = require('jsonwebtoken')
const secretKey = "MEANStackCourseProject"
const auth = async (req,res,next)=>{
    if(req.header('x-auth-token')){
        const token = req.header('x-auth-token')
        try{
            await jwt.verify(token,secretKey);
            next()
        }catch(err){
            console.log(err)
            res.status(401).json({
                message:"Unauthorized Request!! Bad token"
            })
        }
    }else{
        res.status(401).json({
            message:"Unauthorized Request!! Token Missing"
        })
    }
}

module.exports = auth;