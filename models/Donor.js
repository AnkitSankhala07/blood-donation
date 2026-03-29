const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    blood_group: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    date_registered: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Donor', donorSchema);
