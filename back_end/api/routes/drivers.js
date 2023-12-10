const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
 
// importuję model kierowcy
const Driver = require('../models/driver');

const DriverController = require('../controllers/drivers');

router.get('/', DriverController.drivers_get_all);
 
router.post('/', checkAuth, DriverController.drivers_add_new);

router.get('/:driverId', DriverController.drivers_get_by_id);

router.put('/:driverId', checkAuth, DriverController.drivers_change );
   
router.delete('/:driverId', checkAuth, DriverController.drivers_delete );

module.exports = router;
