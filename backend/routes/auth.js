
// imports
const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');

// Routes login
router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);
router.get('/logout', authCtrl.login);

module.exports = router;