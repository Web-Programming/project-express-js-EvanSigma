 var express = require('express');
 var router = express.Router();
 var mainController = require('../controller/main');
 var products = require('../../data/products.json');


/* GET home page. */
//  router.get('/', function(req, res, next) {
//    res.render('index', { 
//      title: 'Toko Online Sederhana',
//      products:products });
//  });

router.get('/', mainController.index);

 router.get('/search', function(req, res, next) {
    const query = req.query.q;
    const filteredProducts = products.filter(q =>
        q.name.toLowerCase().includes(query.toLowerCase()) ||
        q.description.toLowerCase().includes(query.toLowerCase())
    );

    res.render('index', {
        title: 'Hasil Pencarian: ' + query,
        products: filteredProducts
    });
});
 module.exports = router;
