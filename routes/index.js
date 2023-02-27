const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');
router.get('/', homeController.home);
router.use('/create-list', require('./users'));
router.use('/delete-task', require('./deletes'));
module.exports = router;