const HttpError =require('../models/http-error')
const mongoose = require('mongoose');
const uuid = require('uuid').v4

const { validationResult } = require('express-validator');

const Item =require('../models/item');
const User = require('../models/user');


const getItems =  async (req, res, next) =>{
    const userId = req.params.uid;

    let items;
    try{
        items = Item.find({ creator: userId});

    }catch(err){
        const error = new HttpError('Fetching items failed, please try again later', 500);

        return next(error);
    }

    
    
    if(items.length === 0){
   
        return res.status(404)
        .json({messsage: 'Could not find to-do list items for this user'})
    }
   
    res.json({ items: items.map(i => i.toObject({getter:true}))})
    // 因为返回的是数组

};


const createItem = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){

        return next(new HttpError('Invalid inputs, please check again.', 422)
        ) ;
    }

    const userId = req.params.uid;
    const {  title, tags, date }= req.body;

    const createdItem = new Item({
        title,
        tags, 
        date, 
        creator: userId,
    });

    let user
    try {
        user = await User.findById(userId)
    } catch (err) {
        const error = new HttpError('Creating place failed(cannot find user), please try again.', 500)
        return next(error)
    }

  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404)
    return next(error)
  }
    
    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdItem.save({ session: sess });
        user.items.push(createdItem);
        await user.save({ session: sess });
        await sess.commitTransaction()

    }catch(err){
        const error = new HttpError('Creating item failed, please try again.', 500);
        return next(error);
    }

  
    res.status(201).json({ item: createdItem.toObject({getter:true})})


};


const editItem = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors)
        throw new HttpError('Invalid inputs, please check again.')
    }

    const userId = req.params.uid;
    const itemId = req.params.iid;
    const { title, date }= req.body;

    let item;
    try{
        item = await Item.findById(itemId);
    }catch(err){
        const error = new HttpError(
            'something went wrong, could not edit item', 500
        )
    }

    item.title = title;
    item.date = date;
    
    try{


        await item.save()
    }catch(err){
        const error = new HttpError(
            'something went wrong, could not save edited item', 500
        );
    return next(error);
    }
    res.json({ item: item.toObject({getter:true})});

};


const deleteItem = async (req, res, next) =>{

    const userId = req.params.uid;
    const itemId = req.params.iid;

    let item
    try {

        item = await Item.findById(itemId).populate('creator');
    } catch (err) {
        const error = new HttpError(
        'Something went wrong, could not delete item.',
        500
        );
        return next(error)
    };

    if (!item) {
        const error = new HttpError('Could not find item for provided id.', 404)
        return next(error)
      }

    try{

        const sess = await mongoose.startSession();
        sess.startTransaction();
        await item.remove({ session: sess });
        item.creator.items.pull(item);
        await item.creator.save({ session: sess });
        await sess.commitTransaction()
    }catch (err) {
        const error = new HttpError(
        'Something went wrong, could not save deleted item.',
        500
        );
        return next(error)
    };
    
    
    res.status(201).json({message:'List item deleted'})

}


const completeItem = async (req, res, next) =>{

    const itemId = req.params.iid;

    // const itemIdex = DUMMY_ITEMS.findIndex(i=> i.id === itemId);

    // DUMMY_ITEMS[itemIdex].completed= !DUMMY_ITEMS[itemIdex].completed;

    let item;
    try{
        item = await Item.findById(itemId);
    }catch(err){
        const error = new HttpError(
            'something went wrong, could not set item to complete', 500
        )
    }

    item.completed = !item.completed;
   
    try{
        await item.save()
    }catch(err){
        const error = new HttpError(
            'something went wrong, could not save edited item', 500
        );
    return next(error);
    }


    res.status(201).json({message:`status set to ${item.completed} `});

}

// const addTag = (req, res, next) =>{
//     const userId = req.params.uid;
//     const itemId = req.params.iid;

//     const { tagName }= req.body;

//     const createdTag = tagName;

//     DUMMY_ITEMS.find(i =>{
//         return i.id === itemId;
//     }).push(createdTag);

//     res.status(201).json({item: createdTag})



// }






exports.getItems = getItems;
exports.createItem = createItem;
exports.editItem = editItem;
exports.deleteItem = deleteItem;
exports.completeItem = completeItem;

// exports.addTag = addTag;