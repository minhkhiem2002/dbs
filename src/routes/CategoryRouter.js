const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController')

router.get('/all',CategoryController.getAllCategory)

module.exports = router;