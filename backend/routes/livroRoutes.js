const express = require('express');

const router = express.Router();

const livroController = require('../controllers/livroController');

router.get('/:titulo', livroController.buscarLivro);


module.exports = router;