'use strict'

var express = require('express');

var Article = require('../controllers/article');

//Llamamos al objeto router de express:
var router = express.Router();

//Rutas para artículos***********************************************************************************

//Guardar un nuevo artículo.
router.post('/save', Article.save);

//Obtener todos los artículos sin archivar.
router.get('/articles', Article.getArticles);

//Eliminar un artículo. Le pasamos el parámetro :id como obligatorio.
router.delete('/delete/:id', Article.delete);

module.exports = router;

