var products = require('../../data/products.js');

const index = (req, res) => {
 	  res.render('index', { 
         title: 'Toko Online Sederhana',
         products:products });
     }; 
module.exports = { index };