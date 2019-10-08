const app = require('express') ()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./config/keys")
app.use(bodyParser.json());

require('./Models/ParkingModel');
require('./Routes/routes') (app);

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoKey);

app.listen(5000);