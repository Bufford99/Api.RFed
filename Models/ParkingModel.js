const mongoose = require('mongoose');
const { Schema } = mongoose;

const ParkingSchema = new Schema({
    isOpen: Boolean
});

mongoose.model('Parking', ParkingSchema);