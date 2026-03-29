const Donor = require('../models/Donor');
const BloodRequest = require('../models/BloodRequest');

exports.getHome = async (req, res) => {
    try {
        // Get total donors
        const totalDonors = await Donor.countDocuments();
        
        // Get total requests fulfilled (approximation)
        const requestsFulfilled = await BloodRequest.countDocuments();
        
        // Get unique cities
        const citiesData = await Donor.aggregate([
            {
                $group: {
                    _id: '$city',
                    count: { $sum: 1 }
                }
            }
        ]);
        const citiesCovered = citiesData.length;

        const stats = {
            totalDonors,
            requestsFulfilled,
            citiesCovered
        };

        res.render('home', { stats });
    } catch (error) {
        console.error(error);
        res.render('home', { stats: { totalDonors: 0, requestsFulfilled: 0, citiesCovered: 0 } });
    }
};
