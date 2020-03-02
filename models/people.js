// handle each and every people , on a individual level , will look inside of our database

const mongoose = require('mongoose')

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    peopleFollower: {
        type: String,
        required: true
    },
    followDate: {
        type: Date,
        required: true,
        default : Date.now
    }
})

module.exports = mongoose.model('People',peopleSchema)