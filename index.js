const app = require('./core/express')
const db = require('./core/db')

//start app
app.startAPI()

//connect db
db.connect()

