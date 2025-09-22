var express = require('express');
var router = express.Router();
var produk = require('../data/produk.json');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Toko Online Sederhana', produk: produk });
});

module.exports = router;
