const express = require ('express');

const { check } = require('express-validator');

const itemsControllers = require('../controllers/items-controllers')

const router = express.Router();



router.get('/:uid', itemsControllers.getItems);

router.post('/:uid', 
    [check('title')
        .not()
        .isEmpty(),
],
    itemsControllers.createItem);

router.patch('/:uid/:iid', 
        check('title')
        .not()
        .isEmpty(),
        itemsControllers.editItem);

router.delete('/:uid/:iid', itemsControllers.deleteItem);
router.patch('/:uid/:iid/complete', itemsControllers.completeItem);



// router.post('/:uid/:iid', itemsControllers.addTag);


module.exports= router;