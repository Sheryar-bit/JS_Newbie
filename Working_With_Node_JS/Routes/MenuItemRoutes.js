const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async function(req, res) {
    try{
        //This extracts the data sent in the request body and stores it in the menu variable. In the context of a POST request, this is the information the client is sending (e.g., a menu item to be added).
     const menu = req.body;
     //Creaye a new menu document using the mongoose model
     const newMenu = new MenuItem(menu)
 
     //save the new data to the database
     const savedMenu = await newMenu.save();
     console.log('data saved');
     res.status(200).json(savedMenu);
     
    }
 
    catch(err){
     console.log(err);
     res.status(500).send({message: 'Error'})
    }
 })
 
router.get('/', async function(req, res) {
     try{
         const menu = await MenuItem.find();
         console.log("Data Fetched");
         res.status(200).json(menu)
    }
    catch(err){
     console.log(err);
     res.status(500).send({message: 'Error'})
    }
 })

 router.get('/:taste', async function(req, res) {
    try{
        const taste = req.params.taste; //Extracts the taste from the URL parameter or captures the taste value from the URL.
        if(taste == 'sweet' || 'sour' || 'spicy') {
            const menu = await MenuItem.find({taste: taste});
            console.log('Response Fetched');
            res.status(200).json(menu);
        }
        else {
            res.status(404).send({message: 'Invalid taste'})
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message: 'Internal server Error! '})
        
    }
 })


 module.exports = router


 