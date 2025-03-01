import jwt from "jsonwebtoken";


export const tokenParser = (req,res,next)=>{

    const token = req.cookies.schb;

    if(!token){
        return res.json({success:false,message:"You are not logged in",logged:false});
    }

    //If the token exists in th cookie then decode it
    const token_decode = jwt.verify(token,process.env.ACCESS_TOKEN_KEY);

    req.body.user_id = token_decode.id;

    next();
}