const app = require('express') ()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

require('./Models/ParkingModel');
require('./Routes/routes') (app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Jose22i:vcurams22@cluster0-9evdz.mongodb.net/test?retryWrites=true&w=majority');

app.listen(5000);