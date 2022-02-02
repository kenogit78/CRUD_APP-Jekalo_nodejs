const express = require('express')

const router = express.Router()
const userRoutes = require('./api/user');


router.get('/', (req, res) => {
    return res.send('Jekalo Systems Solution Technical Assessment... Implemented by Adaroje Paul Keno')
})

router.use('/api', userRoutes);


module.exports = router