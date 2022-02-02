const express = require('express')

const router = express.Router()
const userRoutes = require('./api/user');


router.get('/', (req, res) => {
    return res.send('API is Running...')
})

router.use('/api', userRoutes);


module.exports = router