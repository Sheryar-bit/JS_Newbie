const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//Post method: posting User Data
router.post('/', async function(req, res) {
    try {
        const data = req.body; // Assuming that the request body contains the persons data

        // Create a new person document using mongoose model
        const newPerson = new person(data);

        // Save the new person to the database
        const savedPerson = await newPerson.save();
        console.log("data saved");
        res.status(200).json(savedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error saving data", error: err });
    }
});

// Get method to get the person data
router.get('/', async function(req, res) {
    try {
        const data = await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error saving data", error: err });
    }
});

//Purpose: Sets up a GET route where :workType is a dynamic parameter in the URL (e.g., /Chef or /Manager).


router.get('/:workType', async function(req, res) {
    try {
        const workType = req.params.workType; // Extracts the work type from the URL parameter or captures the workType value from the URL.
        if (workType == 'Chef' || workType == 'Manager' || workType == 'Waiter') {
            const data = await person.find({ work: workType }); // Finds all persons with the
            console.log('Response Fetched');
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Work type not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
});

//Update Person data
router.put('/:id', async function(req, res) {
    try{
        const PersonId = req.params.id; //Extracts the id from the URL parameter
        const updatedPersonData = req.body; //Extracts the data from the request body

        const Response = await person.findByIdAndUpdate(PersonId, updatedPersonData, {
            new: true, //Returns the updated document
            runValidators: true //Run Mongoose validation
        })
        console.log('Person Updated');
        res.status(200).json(Response);
    }
    catch(err) {
        console.log(err);
        res.status(404).json({ error: 'Person Not Found!' });
    }
})

//Delete person data
router.delete('/:id', async function(req, res) {
    try{
        const PersonId = req.params.id; //Extracts the id from the URL parameter
        const Response = await person.findByIdAndDelete(PersonId);
        if(!Response) {
            res.status(404).json({ message: "Person Not Found" });
        }
        else{
            console.log('Person Deleted');
            res.status(200).json(Response);
        }
    }
    catch(err) {
        console.log(err);
        res.status(404).json({ error: 'Person Not Found!' });
    }
})

// Export the router
module.exports = router;


