const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
    patient_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    hospital_name: {
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
    is_urgent: {
        type: Boolean,
        default: false
    },
    date_requested: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('BloodRequest', bloodRequestSchema);
