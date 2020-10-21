const express = require ('express');

const { check } = require('express-validator');
const checkAuth = require("../middleware/check-auth");

const itemsControllers = require('../controllers/items-controllers')

const router = express.Router();

// router.use(checkAuth);

router.get('/:uid', itemsControllers.getItems);
router.get('/:uid/search', itemsControllers.searchItems);


router.post('/:uid', 
    [check('title')
        .not()
        .isEmpty(),
],
    itemsControllers.createItem);

router.patch('/:iid', itemsControllers.completeItem);

router.patch('/:uid/:iid', 
        [check('title')
        .not()
        .isEmpty(),
        ],
        itemsControllers.editItem);

router.delete('/:uid/:iid', itemsControllers.deleteItem);




// router.post('/:uid/:iid', itemsControllers.addTag);


module.exports= router;