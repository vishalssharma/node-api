// here we will define how the server should handle the data when it receives a GET , POST or PATCH request.

// setting up our Routes

// checking dependency
const express = require('express')
const router = express.Router()
const People = require('../models/people')


// route for getting all users
router.get('/', async (req,res) => {
    try{
        // return/fetch all associated people objects
        const peoples = await People.find()
        // sending in JSON
        res.json(peoples)

    } catch (err) {
        err.status(500).json({message:err.message})
    }

})
// route for getting one users
// passing id of the user
router.get('/:id', (req,res) => {

})
// route for creating a user
router.post('/', async (req,res) => {
    const people = new People({
        name: req.body.name,
        peopleFollower: req.body.peopleFollower
    })

    try {
        // store a info
        const newPeople = await people.save()
        // 201 success status
        res.status(201).json(newPeople)

    } catch (err) {
        // 400 error status
        res.status(400).json({message:err.message})

    }

})
// route for updating a user 
// using patch instead of PUT coz we want to update a certain pieces not all the info
router.patch('/:id', (req,res) => {

})
// route for deleting a user
router.delete('/:id', (req,res) => {

})

module.exports = router