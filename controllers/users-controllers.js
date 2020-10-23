const HttpError =require('../models/http-error')
const uuid = require('uuid').v4;
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');



const getUsers = (req, res, next) =>{
    res.json({users: DUMMY_USERS});
};


const signup = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs, please check again. Password needs to be longer than 6 characters', 422)
        ) ;
    };
    const { name, email, password } = req.body;

    let existingUser
    try{
        existingUser = await User.findOne({email: email})
    }catch(err){
        const error = new HttpError('Signing up failed, please try again later.', 500);
        return next(error);
    }

    if(existingUser){
        const error = new HttpError('User already exists, please turn to login', 422);
        return next(error);
    }

    let hashedPassword
   
    try{
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt)
    }catch(err){
        const error = new HttpError('Could not create user, please try again(ps word).', 500)
        return next(error)
    }



    const createdUser = new User({
        name, 
        email, 
        password:hashedPassword
    });

    // DUMMY_USERS.push(createdUser);
    try{
        await createdUser.save()

    }catch(err){
        const error = new HttpError('Signing up failed.', 500);
        return next(error);

    }
   


    res.status(201).json({user: createdUser.toObject({getter:true})})

}

const login = async (req, res, next) =>{
    const { email, password } = req.body;

   
    let existingUser
    try{
        existingUser = await User.findOne({email: email})
    }catch(err){
        const error = new HttpError('Signing up failed, please try again later.', 500);
        return next(error);
    }

    if(!existingUser){
        const error = new HttpError('Invalid credentials, could not log you in.', 403);
        return next(error);
    }

    let isValidPassword = false
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
    } catch (err) {
        const error = new HttpError(
        'Could not log you in, please check your credentials and try again.',
        500
        )
        return next(error)
    }

    if (!isValidPassword) {
        const error = new HttpError(
        'Invalid credentials, could not log you in.',
        403
        )
        return next(error)
    }


    // res.status(201).json({user: existingUser});

    let token
    try {
        token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email },
        'hanbing',
        {
            expiresIn: '1h',
        }
        )
    } catch (err) {
        const error = new HttpError(
        'Logging in failed, please try again later.',
        500
        )
        return next(error)
    }

    res.json({
        message: "Authentication successful!",
        userId: existingUser._id,
        userName: existingUser.name,
        email: existingUser.email,
        token: token,
    })
    
}


exports.signup = signup;
exports.login = login;
exports.getUsers = getUsers;