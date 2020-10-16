const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

const auth = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token){
        return res
                .status(401)
                .json({message: "No authentication."})
        }

    try{
        const verified =  jwt.verify(token, 'Hanbing');
        if(!verified){
            return res
                .status(401)
                .json({message: "Token verification failed."})
        }

        res.user = verified.id
        next()


    }catch(err){
        return res
        .status(500)
        .json({message: "Token verification failed."})

    }
}

  
  

module.exports = auth