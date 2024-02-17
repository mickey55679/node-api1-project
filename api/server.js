// BUILD YOUR SERVER HERE
// global obeject and whatever we set it to be becomes required in other modules 
const express = require('express')

const server = express()

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
