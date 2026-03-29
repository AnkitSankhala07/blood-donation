const BloodRequest = require('../models/BloodRequest');

exports.getRequests = async (req, res) => {
    try {
        const requests = await BloodRequest.find().sort({ is_urgent: -1, date_requested: -1 });
        res.render('request_list', { requests });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getAddRequest = (req, res) => {
    res.render('request_blood');
};

exports.postAddRequest = async (req, res) => {
    const { patient_name, phone_number, hospital_name, city, blood_group, is_urgent } = req.body;

    // Handle urgent flag from hidden input
    const urgent = is_urgent === 'true' ? true : false;

    try {
        const newRequest = new BloodRequest({
            patient_name,
            phone_number,
            hospital_name,
            city,
            blood_group,
            is_urgent: urgent
        });
        await newRequest.save();
        res.redirect('/requests');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
