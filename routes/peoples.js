// here we will define how the server should handle the data when it receives a GET , POST or PATCH request.

// setting up our Routes

// checking dependency
const express = require('express')
const router = express.Router()



// route for getting all users
router.get('/', (req,res) => {
    res.send("Hello WORLD")

})
// route for getting one users
// passing id of the user
router.get('/:id', (req,res) => {

})
// route for creating a user
router.post('/', (req,res) => {

})
// route for updating a user 
// using patch instead of PUT coz we want to update a certain pieces not all the info
router.patch('/:id', (req,res) => {

})
// route for deleting a user
router.delete('/:id', (req,res) => {

})

module.exports = router