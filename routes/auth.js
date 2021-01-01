const express = require('express');
const router = express.Router();

// GET api/auth
// get logged in user
// Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// Post api/auth
// auth user and get token
//public
router.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = router;
