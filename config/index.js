require('dotenv').config()

module.exports = {
    port: process.env.PORT || 7000,
    mongoURL: process.env.MONGO_URL,
}