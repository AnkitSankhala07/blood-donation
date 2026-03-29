const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const donorController = require('../controllers/donorController');
const requestController = require('../controllers/requestController');

router.get('/', homeController.getHome);
router.get('/home', homeController.getHome);

// Donors
router.get('/donors', donorController.getDonors);
router.get('/add-donor', donorController.getAddDonor);
router.post('/add-donor', donorController.postAddDonor);

// Requests
router.get('/requests', requestController.getRequests);
router.get('/request-blood', requestController.getAddRequest);
router.post('/request-blood', requestController.postAddRequest);

module.exports = router;
