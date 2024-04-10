const express = require('express');
const {
    getAllContact,
    addContact,
    updateContact,
    deleteContactById
} = require('../controllers/contactController');

const router = express.Router();

router.get('/', getAllContact);
router.post('/', addContact);
router.put('/', updateContact);
router.delete('/:id', deleteContactById);

module.exports = router;
