const express = require('express');
const router = express.Router();

// Get api/contacts
// get all users contacts
// Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// Post api/contacts
// add new contact
// Private
router.post('/', (req, res) => {
  res.send('add new contact');
});

// put api/contacts
// update contact
// Private
router.get('/:id', (req, res) => {
  res.send('update contact');
});

// delete api/contacts
// delete contact
// Private
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
