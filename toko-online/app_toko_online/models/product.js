const mongoose = require('mongoose');

//buat skema produck
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:  [true, 'nama produk harus di isi'] ,
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'harga produk harus di isi' ],
        min: [1000, 'harga produk tidak boleh kurang dari 0'],
        // max: [100000000, 'harga produk tidak boleh lebih dari 100 juta'],
    },
    description: {
        type: String,
        required: false,// 'deskripsi produk tidak harus di isi' },
    },
    stock: {
        type: Number,
        default: 0,// memberikan nilai default
    },
    createAt: {
        type: Date,
        default: Date.now, // memberikan nilai default
    }
});

//buat model product
const Product = mongoose.model('Product', productSchema);
//export model product
module.exports = Product;

