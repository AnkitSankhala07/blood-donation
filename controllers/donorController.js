const Donor = require('../models/Donor');

exports.getDonors = async (req, res) => {
    try {
        const donors = await Donor.find().sort({ date_registered: -1 });
        res.render('donor_list', { donors });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getAddDonor = (req, res) => {
    res.render('add_donor');
};

exports.postAddDonor = async (req, res) => {
    const { name, email, phone_number, city, blood_group } = req.body;
    try {
        const newDonor = new Donor({
            name,
            email,
            phone_number,
            city,
            blood_group
        });
        await newDonor.save();
        res.redirect('/add-donor?success=true');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
