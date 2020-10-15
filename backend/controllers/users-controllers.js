const HttpError =require('../models/http-error')
const uuid = require('uuid').v4;
const { validationResult } = require('express-validator');

const User = require('../models/user');


const getUsers = (req, res, next) =>{
    res.json({users: DUMMY_USERS});
};


const signup = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs, please check again.', 422)
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

    const createdUser = new User({
        name, 
        email, 
        password
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

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('Invalid credentials, could not log you in.', 403);
        return next(error);
    }



    // const identifiedUser = DUMMY_USERS.find( u => u.email === email);
    // if (!identifiedUser || identifiedUser.password !== password ){
    //     throw new HttpError('Could not identify user, credentials unfound.')
    // }


    res.status(201).json({message: 'logged in'})
    
}


exports.signup = signup;
exports.login = login;
exports.getUsers = getUsers;