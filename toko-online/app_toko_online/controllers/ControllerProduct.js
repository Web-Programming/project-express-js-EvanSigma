var products = require('../../data/products.json');
var products=require('../models/product');

const index = async (req, res) => {
    try {
        const product = 
        const products = await Product.find(); // ambil semua data produk dari database
        res.render('product-list', { 
            title: 'Daftar Produk', 
            products: products 
        });
    } catch (error) {
        res.status(500).send('Error mengambil data produk: ' + error.message);
    }
};
const getProductById=(req, res, next) => {
    const productId = parseInt(req.params.id); // tangkap id dari url
    const product = products.find(p => p.id === productId); // cari produk berdasarkan id

    if(!product){
        return res.status(404).send("Produk tidak ditemukan");
    }
    res.render("product-detail", 
        {
            title: product.name, 
            product: product
        }
    );
}
const detail = (req, res) => {
 	const productId = parseInt(req.params.id); // tangkap id dari url
    const product = products.find(p => p.id === productId); // cari produk berdasarkan id

    if(!product){
        return res.status(404).send("Produk tidak ditemukan");
    }
    res.render("product-detail", 
        {
            title: product.name, 
            product: product
        }
    );
}; 
module.exports = { index, detail };